import axios, { AxiosResponse } from "axios"
import * as $ from "jquery"
import { ISignatureUILabel } from "./interface/ISignatureUILabel"
import { SignatureUiLabelInput } from "./SignatureUiLabelInput"
import { SignatureUiLabelQuery } from "./SignatureUiLabelQuery"
import _ from "./Tools"

export class SignatureUiLabel extends SignatureUiLabelInput implements ISignatureUILabel {
	/**
	 * List all Signature UI Label
	 * @param {SignatureUiLabelQuery} params Query parameters
	 * @return {Promise<AxiosResponse<SignatureUiLabel[]>>}
	 */
	public static list(params: SignatureUiLabelQuery): Promise<AxiosResponse<SignatureUiLabel[]>> {
		if (!params.signatureUi) { throw new Error("You must provide a SignatureUI ID to list labels") }
		return axios.get(this.path + "?" + $.param(params)).then((response) => {
			response.data.forEach((item, index, array) => {
				array[index] = new this(item)
			})
			return response
		})
	}
	/**
	 * Read a SignatureUiLabel
	 * @param {string} id SignatureUiLabel ID
	 * @return {Promise<SignatureUiLabel>}
	 */
	public static read(id: string): Promise<SignatureUiLabel> {
		return axios.get(id).then((response) => {
			return new this(response.data)
		})
	}
	/** Base API URL */
	protected static path: string = "/signature_uis_labels"
	/** Resource’s ID */
	public id: string = null
	/** Creator’s ID */
	public creator: string = null
	/** Date of creation */
	public createdAt: string = null
	/** Date of last update */
	public updatedAt: string = null
	/** Base API URL */
	protected readonly path: string = "/signature_uis_labels"
	/**
	 * Constructor
	 * @param {ISignatureUILabel} data The data used to fill the instance
	 */
	constructor(data: ISignatureUILabel = {}) {
		super()
		this.fill(data)
	}
	/**
	 * Fill the object
	 * @param {ISignatureUILabel} data The data used to fill the instance
	 */
	public fill(data: ISignatureUILabel) {
		if (_.isEmpty(data)) { return }

		_.extendOwn(this, _.pick(data, "id", "creator", "createdAt", "updatedAt", "name", "languages", "signatureUi"))
	}
	/**
	 * Create this SignatureUiLabel
	 * @return Promise<SignatureUiLabel>
	 */
	public post(): Promise<SignatureUiLabel> {
		const data = new SignatureUiLabelInput(this)
		return axios.post(this.path, data).then((response) => {
			this.fill(response.data)
			return this
		})
	}
	/**
	 * Update this user
	 * @param {SignatureUiLabelInput} data
	 * @return Promise<SignatureUiLabel>
	 */
	public put(data: SignatureUiLabelInput = null): Promise<SignatureUiLabel> {
		if (data === null) { data = new SignatureUiLabelInput(this) }
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
