export interface ICheckDocumentIdentitiesInput {
	/** Content in base 64 of the document to check */
	file?: string
	/** List of firstnames to check on document */
	firstNames?: string[]
	/** Birth name to check on document */
	birthName?: string
	/** Birth date to check on document */
	birthDate?: string
}
