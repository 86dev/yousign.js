export const YsFileTypes = ["signable", "sign_image", "company_logo", "attachment"]

export type TYsFileTypes = "signable" | "sign_image" | "company_logo" | "attachment"

export interface IYsFileInput {
	/** Name of the file */
	name?: string
	/**
	 * Type of the file.
	 * @see YsFileTypes
	 * @enum: [ signable, sign_image, company_logo, attachment ]
	 */
	type?: TYsFileTypes
	/** Password for protected PDF file */
	password?: string
	/** Description of the file */
	description?: string
	/** Metadata of the file */
	metadata?: any
	/** Content in base 64 of the file */
	content?: string
	/** Id of the procedure */
	procedure?: string
}
