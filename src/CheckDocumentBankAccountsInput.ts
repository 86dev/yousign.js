import { ICheckDocumentBankAccountsInput } from "./interface/ICheckDocumentBankAccountsInput"
import _ from "./Tools"

export class CheckDocumentBankAccountsInput implements ICheckDocumentBankAccountsInput {
	/** Content in base 64 of the document to check */
	public file: string = null
	/** Firstname to check on document */
	public firstName: string = null
	/** Birth name to check on document */
	public birthName: string = null
	/** Lastname to check on document */
	public lastName: string = null
	/** Company name to check on document */
	public companyName: string = null
	/** Iban text to check on document */
	public iban: string = null
	/**
	 * Constructor
	 * @param {ICheckDocumentBankAccountsInput} data The data used to fill the instance
	 */
	constructor(data: ICheckDocumentBankAccountsInput = {}) {
		_.extendOwn(this, _.pick(data, "file", "firstName", "birthName", "lastName", "companyName", "iban"))
	}
}
