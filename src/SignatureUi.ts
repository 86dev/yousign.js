import axios, { AxiosResponse } from "axios"
import { ISignatureUI } from "./interface/ISignatureUI"
import { RedirectConfig } from "./RedirectConfig"
import { SignatureUiInput } from "./SignatureUiInput"
import { SignatureUiInputUpdate } from "./SignatureUiInputUpdate"
import { SignatureUiLabel } from "./SignatureUiLabel"
import _ from "./Tools"

export const ysLanguages = [
	{ value: "fr", text: "Français" },
	{ value: "en", text: "Anglais" },
	{ value: "de", text: "Allemand" },
	{ value: "es", text: "Espagnol" },
	{ value: "it", text: "Italien" },
	{ value: "nl", text: "Néerlandais" },
	{ value: "pt", text: "Portugais" },
]

export class SignatureUi extends SignatureUiInput implements ISignatureUI {
	/**
	 * List all Signature UI
	 * @return {Promise<AxiosResponse<SignatureUi[]>>}
	 */
	public static list(): Promise<AxiosResponse<SignatureUi[]>> {
		return axios.get(this.path).then((response) => {
			response.data.forEach((item, index, array) => {
				array[index] = new this(item)
			})
			return response
		})
	}
	/**
	 * Read a SignatureUi
	 * @param {string} id SignatureUi ID
	 * @return {Promise<SignatureUi>}
	 */
	public static read(id: string): Promise<SignatureUi> {
		return axios.get(id).then((response) => {
			return new this(response.data)
		})
	}
	/** Base API URL */
	protected static path: string = "/signature_uis"
	/** Resource’s ID */
	public id: string = null
	/** Labels definitions */
	public labels: SignatureUiLabel[] = []
	/** Creator’s ID */
	public creator: string = null
	/** Associated Company’s ID */
	public company: string = null
	/** Date of creation */
	public createdAt: string = null
	/** Date of last update */
	public updatedAt: string = null
	/** Base API URL */
	protected readonly path: string = "/signature_uis"
	/**
	 * Constructor
	 * @param {ISignatureUI} data The data used to fill the instance
	 */
	constructor(data: ISignatureUI = {}) {
		super()
		this.fill(data)
	}
	/**
	 * Fill the object
	 * @param {ISignatureUI} data The data used to fill the instance
	 */
	public fill(data: ISignatureUI) {
		if (_.isEmpty(data)) { return }

		_.extendOwn(this, _.pick(data, "id", "creator", "company", "createdAt", "updatedAt", "name", "description", "enableHeaderBar", "enableHeaderBarSignAs", "enableSidebar", "enableMemberList", "enableDocumentList", "enableDocumentDownload", "enableActivities", "authenticationPopup", "defaultZoom", "logo", "signImageTypesAvailable", "defaultLanguage", "languages", "fonts", "style"))

		if (data.redirectCancel) {
			this.redirectCancel = data.redirectCancel instanceof RedirectConfig ? data.redirectCancel : new RedirectConfig(data.redirectCancel)
		}
		if (data.redirectError) {
			this.redirectError = data.redirectError instanceof RedirectConfig ? data.redirectError : new RedirectConfig(data.redirectError)
		}
		if (data.redirectSuccess) {
			this.redirectSuccess = data.redirectSuccess instanceof RedirectConfig ? data.redirectSuccess : new RedirectConfig(data.redirectSuccess)
		}
		if (data.labels && _.isArray(data.labels)) {
			data.labels.forEach((item) => {
				this.labels.push(item instanceof SignatureUiLabel ? item : new SignatureUiLabel(item))
			})
		}
	}
	/**
	 * Create this SignatureUi
	 * @return Promise<SignatureUi>
	 */
	public post(): Promise<SignatureUi> {
		const data = new SignatureUiInput(this)
		return axios.post(this.path, data).then((response) => {
			this.fill(response.data)
			return this
		})
	}
	/**
	 * Update this SignatureUi
	 * @param {SignatureUiInputUpdate} data
	 * @return Promise<SignatureUi>
	 */
	public put(data: SignatureUiInputUpdate = null): Promise<SignatureUi> {
		if (data === null) { data = new SignatureUiInputUpdate(this) }
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
