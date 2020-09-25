export interface ICheckDocumentBankAccountsInput {
	/** Content in base 64 of the document to check */
	file?: string
	/** Firstname to check on document */
	firstName?: string
	/** Birth name to check on document */
	birthName?: string
	/** Lastname to check on document */
	lastName?: string
	/** Company name to check on document */
	companyName?: string
	/** Iban text to check on document */
	iban?: string
}
