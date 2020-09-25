import axios from "axios"
import { CheckDocumentBankAccountsInput } from "./CheckDocumentBankAccountsInput"
import { ICheckDocumentBankAccounts } from "./interface/ICheckDocumentBankAccounts"
import _ from "./Tools"

export class CheckDocumentBankAccounts implements ICheckDocumentBankAccounts {
	/**
	 * Read a CheckDocumentBankAccounts
	 * @param {string} id CheckDocumentBankAccounts ID
	 * @return {Promise<CheckDocumentBankAccounts>}
	 */
	public static read(id: string): Promise<CheckDocumentBankAccounts> {
		return axios.get(id).then((response) => {
			return new this(response.data)
		})
	}
	/** Base API URL */
	protected static path: string = "/check_document/bank_accounts"
	/** Id of the object */
	public id: string = null
	/** Created date of the object */
	public createdAt: string = null
	/** Updated date of the object */
	public updatedAt: string = null
	/** Firstname to check on document */
	public firstName: string = null
	/** Birth name to check on document */
	public birthName: string = null
	/** Lastname to check on document */
	public lastName: string = null
	/** Iban to check on document */
	public iban: string = null
	/** Company name to check on document */
	public companyName: string = null
	/**
	 * Type of document.
	 * @enum [ RIB ]
	 */
	public documentType: "RIB" = null
	/** Company creator of the object */
	public company: string = null
	/** Creator of the object */
	public creator: string = null
	/** Extracted iban on the document */
	public extractedIban: string = null
	/** Defines if one firstname sent in the input is valid */
	public firstNameValid: boolean = false
	/** Defines if birth name sent in the input is valid */
	public birthNameValid: boolean = false
	/** Defines if lastname sent in the input is valid */
	public lastNameValid: boolean = false
	/** Defines if company name sent in the input is valid */
	public companyNameValid: boolean = false
	/** Defines if iban sent in the input is valid */
	public ibanValid: boolean = false
	/** Base API URL */
	protected readonly path: string = "/check_document/bank_accounts"
	/**
	 * Constructor
	 * @param {ICheckDocumentBankAccounts} data The data used to fill the instance
	 */
	constructor(data: ICheckDocumentBankAccounts = {}) {
		this.fill(data)
	}
	/**
	 * Fill the object
	 * @param {ICheckDocumentBankAccounts} data The data used to fill the instance
	 */
	public fill(data: ICheckDocumentBankAccounts) {
		if (_.isEmpty(data)) { return }

		_.extendOwn(this, _.pick(data, "id", "createdAt", "updatedAt", "firstName", "birthName", "lastName", "companyName", "iban", "documentType", "company", "creator", "extractedIban", "firstNameValid", "birthNameValid", "lastNameValid", "companyNameValid", "ibanValid"))
	}
	/**
	 * Create this CheckDocumentBankAccounts
	 * @return Promise<CheckDocumentBankAccounts>
	 */
	public post(): Promise<CheckDocumentBankAccounts> {
		const data = new CheckDocumentBankAccountsInput(this)
		return axios.post(this.path, data).then((response) => {
			this.fill(response.data)
			return this
		})
	}
}
