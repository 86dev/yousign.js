import { IYsFileInput } from "./IYsFileInput"

export interface IYsFile extends IYsFileInput {
	/** Id of the object */
	id?: string
	/**
	 * Type of content
	 * @example application/pdf
	 */
	contentType?: string
	/** Created date of the object */
	createdAt?: string
	/** Updated date of the object */
	updatedAt?: string
	/** Id of company */
	company?: string
	/** Id of creator */
	creator?: string
}
