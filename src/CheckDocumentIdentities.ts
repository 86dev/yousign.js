import axios from "axios"
import { CheckDocumentIdentitiesInput } from "./CheckDocumentIdentitiesInput"
import { ICheckDocumentIdentities } from "./interface/ICheckDocumentIdentities"
import _ from "./Tools"

export class CheckDocumentIdentities implements ICheckDocumentIdentities {
	/**
	 * Read a CheckDocumentIdentities
	 * @param {string} id CheckDocumentIdentities ID
	 * @return {Promise<CheckDocumentIdentities>}
	 */
	public static read(id: string): Promise<CheckDocumentIdentities> {
		return axios.get(id).then((response) => {
			return new this(response.data)
		})
	}
	/** Base API URL */
	protected static path: string = "/check_document/identities"
	/** Id of the object */
	public id: string = null
	/** Created date of the object */
	public createdAt: string = null
	/** Updated date of the object */
	public updatedAt: string = null
	/** List of firstnames to check on document */
	public firstNames: string[] = []
	/** Birth name to check on document */
	public birthName: string = null
	/** Birth date to check on document */
	public birthDate: string = null
	/** Company creator of the object */
	public company: string = null
	/** Creator of the object */
	public creator: string = null
	/**
	 * Type of document.
	 * @enum [ ID_CARD, PASSPORT ]
	 */
	public documentType: "ID_CARD" | "PASSPORT" = null
	/** Extracted firstnames on the document */
	public extractedFirstNames: string[] = null
	/** Extracted birth name on the document */
	public extractedBirthName: string = null
	/** Extracted birth date on the document */
	public extractedBirthDate: string = null
	/** Extracted gender on the document */
	public extractedGender: string = null
	/** Extracted issuance date on the document */
	public extractedIssuanceDate: string = null
	/** Extracted expiration date on the document */
	public extractedExpirationDate: string = null
	/** Extracted MRZ on the document */
	public extractedMrz: string[] = null
	/** Defines if one firstname sent in the input is valid */
	public firstNameValid: boolean = false
	/** Defines if birth name sent in the input is valid */
	public birthNameValid: boolean = false
	/** Defines if MRZ sent in the input is valid */
	public mrzValid: boolean = false
	/** Defines if the document is expired */
	public expired: boolean = false
	/** Defines if the document is valid */
	public valid: boolean = false
	/** Base API URL */
	protected readonly path: string = "/check_document/identities"
	/**
	 * Constructor
	 * @param {ICheckDocumentIdentities} data The data used to fill the instance
	 */
	constructor(data: ICheckDocumentIdentities = {}) {
		this.fill(data)
	}
	/**
	 * Fill the object
	 * @param {ICheckDocumentIdentities} data The data used to fill the instance
	 */
	public fill(data: ICheckDocumentIdentities) {
		if (_.isEmpty(data)) { return }

		_.extendOwn(this, _.pick(data, "id", "createdAt", "updatedAt", "firstNames", "birthName", "birthDate", "company", "creator", "documentType", "extractedFirstNames", "extractedBirthName", "extractedBirthDate", "extractedGender", "extractedIssuanceDate", "extractedExpirationDate", "extractedMrz", "firstNameValid", "birthNameValid", "mrzValid", "expired", "valid"))
	}
	/**
	 * Create this CheckDocumentIdentities
	 * @return Promise<CheckDocumentIdentities>
	 */
	public post(): Promise<CheckDocumentIdentities> {
		const data = new CheckDocumentIdentitiesInput(this)
		return axios.post(this.path, data).then((response) => {
			this.fill(response.data)
			return this
		})
	}
}
