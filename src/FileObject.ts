import axios, { AxiosResponse } from "axios"
import { IFileObject } from "./interface/IFileObject"
import { FileObjectInput } from "./FileObjectInput"
import { FileObjectWithoutFileReference } from "./FileObjectWithoutFileReference"
import _ from "./Tools"
import { YsFile } from "./YsFile"
import { YsFileInputData } from "./YsFileInputData"

export class FileObject extends FileObjectWithoutFileReference implements IFileObject {
	/**
	 * Read a FileObject
	 * @param {string} id FileObject ID
	 * @return {Promise<FileObject>}
	 */
	public static read(id: string): Promise<FileObject> {
		return axios.get(id).then((response) => {
			return new this(response.data)
		})
	}
	protected static path: string = "/file_objects"
	/** Id of the object */
	public id: string = null
	/** Created date of the object */
	public createdAt: string = null
	/** Updated date of the object */
	public updatedAt: string = null
	/** Date of signature or validation */
	public executedAt: string = null
	/** File id reference */
	public file: YsFileInputData = null
	/** Member id reference */
	public member: string = null
	protected readonly path: string = "/file_objects"

	/**
	 * Constructor
	 * @param {IFileObject} data The data used to fill the instance
	 */
	constructor(data: IFileObject = {}) {
		super()
		this.fill(data)
	}
	/**
	 * Fill the object
	 * @param {IFileObject} data The data used to fill the instance
	 */
	public fill(data: IFileObject) {
		if (_.isEmpty(data)) { return }

		_.extendOwn(this, _.pick(data, "page", "position", "fieldName", "mention", "mention2", "id", "createdAt", "updatedAt", "executedAt", "member"))

		if (data.file) {
			this.file = data.file instanceof YsFile ? data.file : new YsFile(data.file)
		}
	}
	/**
	 * Create this FileObject
	 * @return Promise<FileObject>
	 */
	public post(): Promise<FileObject> {
		const data = new FileObjectInput(this)
		return axios.post(this.path, data).then((response: { data: IFileObject; }) => {
			this.fill(response.data)
			return this
		})
	}
	/**
	 * Update this FileObject
	 * @param {FileObjectInput} data
	 * @return Promise<FileObject>
	 */
	public put(data: FileObjectInput = null): Promise<FileObject> {
		if (data === null) { data = new FileObjectInput(this) }
		return axios.put(this.id, data).then((response) => {
			this.fill(response.data)
			return this
		})
	}
	/**
	 * Delete this object
	 * @return Promise<AxiosResponse<any>>
	 */
	public delete(): Promise<AxiosResponse<any>> {
		return axios.delete(this.id)
	}
}
