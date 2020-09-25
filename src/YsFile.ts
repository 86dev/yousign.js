import axios from "axios"
import { IYsFile } from "./interface/IYsFile"
import { IYsFileInput } from "./interface/IYsFileInput"
import _ from "./Tools"
import { YsFileInput } from "./YsFileInput"

export class YsFile extends YsFileInput implements IYsFile {
	/**
	 * Read a File
	 * @param {string} id File ID
	 * @return {Promise<YsFile>}
	 */
	public static read(id: string): Promise<YsFile> {
		return axios.get(id).then((response) => {
			return new this(response.data)
		})
	}
	/** Base API URL */
	protected static path: string = "/files"
	/** Id of the object */
	public id: string = null
	/**
	 * Type of content
	 * @example application/pdf
	 */
	public contentType: string = null
	/** Created date of the object */
	public createdAt: string = null
	/** Updated date of the object */
	public updatedAt: string = null
	/** Id of company */
	public company: string = null
	/** Id of creator */
	public creator: string = null
	/**
	 * File (blob) object
	 */
	public file: File
	/** Base API URL */
	protected readonly path: string = "/files"
	/**
	 * Constructor
	 * @param {YsFileData} data The data used to fill the instance
	 */
	constructor(data: YsFileData = {}) {
		super()
		this.fill(data)
	}
	/**
	 * Fill the object
	 * @param {YsFileData} data The data used to fill the instance
	 */
	public fill(data: YsFileData) {
		if (_.isEmpty(data)) { return }

		_.extendOwn(this, _.pick(data, "id", "name", "type", "contentType", "description", "metadata", "createdAt", "updatedAt", "company", "creator"))
	}
	/**
	 * Download file content
	 * @return {Promise<File>}
	 */
	public download(): Promise<File> {
		if (this.file) {
			return new Promise((resolve, reject) => { resolve(this.file) })
		} else if (this.content) {
			return base64ToFile(this.content, this.name, this.contentType).then((file) => {
				this.file = file
				return file
			})
		}
		return axios.get(this.id + "/download").then((response) => {
			this.content = response.data
			return base64ToFile(this.content, this.name, this.contentType).then((file) => {
				this.file = file
				return file
			})
		})
	}
	/**
	 * Duplicate this file
	 * @return {Promise<YsFile>}
	 */
	public duplicate(): Promise<YsFile> {
		return axios.post(this.id + "/duplicate").then((response) => {
			return new YsFile(response.data)
		})
	}
	/**
	 * Create this file
	 * @return Promise<YsFile>
	 */
	public post(): Promise<YsFile> {
		if (!this.file) { throw new Error("Aucun fichier n'a été défini") }

		return fileToBase64(this.file).then((base64) => {
			this.content = removeBase64Prefix(base64)
			return axios.post(this.path, new YsFileInput(this)).then((response) => {
				this.fill(response.data)
				return this
			})
		})
	}
	/**
	 * Update this file
	 * @param {YsFileInputData} data
	 * @return Promise<YsFile>
	 */
	public put(data: YsFileInputData = null): Promise<YsFile> {
		if (data === null) { data = new YsFileInput(this) }
		return axios.put(this.id, data).then((response) => {
			this.fill(response.data)
			return this
		})
	}
}

/**
 * Convert a file in Base64
 * @param {window.File} file The file to read
 * @return {Promise<string>}
 */
function fileToBase64(file: any): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.onload = () => resolve(reader.result.toString())
		reader.onerror = (error) => reject(error)
		reader.readAsDataURL(file)
	})
}

/**
 * Convert a base64 string to a file
 * @param {string} base64 Base64 encoded string
 * @param {string} name File name
 * @param {string} contentType File content type
 * @return {Promise<window.File>}
 */
function base64ToFile(base64: string, name: string, contentType: string): Promise<File> {
	base64 = addBase64Prefix(base64, contentType)
	return fetch(base64).then((res) => res.blob()).then((blob) => {
		// @ts-ignore TS2693: 'File' only refers to a type, but is being used as a value here.
		return new File([blob], name, { type: contentType })
	})
}

/**
 * Add base64 prefix to a string if it is not present
 * @param base64 base64 encoded string
 * @param contentType File content type
 */
function addBase64Prefix(base64: string, contentType: string): string {
	if (/^data:[^;]+?;base64,/.test(base64)) {
		return base64
	} else {
		return `data:${contentType};base64,${base64}`
	}
}

/**
 * Remove the base64 prefix from a base64 encoded string
 * @param base64 Base64 encoded string
 */
function removeBase64Prefix(base64: string): string {
	return base64 ? base64.replace(/^data:[^;]+?;base64,/, "") : null
}
