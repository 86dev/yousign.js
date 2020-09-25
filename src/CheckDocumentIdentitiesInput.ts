import { ICheckDocumentIdentitiesInput } from "./interface/ICheckDocumentIdentitiesInput"
import _ from "./Tools"

export class CheckDocumentIdentitiesInput implements ICheckDocumentIdentitiesInput {
	/** Content in base 64 of the document to check */
	public file: string = null
	/** List of firstnames to check on document */
	public firstNames: string[] = null
	/** Birth name to check on document */
	public birthName: string = null
	/** Birth date to check on document */
	public birthDate: string = null
	/**
	 * Constructor
	 * @param {ICheckDocumentIdentitiesInput} data The data used to fill the instance
	 */
	constructor(data: ICheckDocumentIdentitiesInput = {}) {
		_.extendOwn(this, _.pick(data, "file", "firstNames", "birthName", "birthDate"))
	}
}
