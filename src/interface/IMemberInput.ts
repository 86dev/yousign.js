import { IFileObjectInput } from "./IFileObjectInput"

export const MemberTypes = ["signer", "validator"]
export type TMemberTypes = "signer" | "validator"

export interface IMemberInput {
	/** ID of the user in your companies. Informations about the member will be duplicate (first name, last name, email and phone number). Required if none of fields above are specified. */
	user?: string
	/**
	 * Type of a member. “signer” to sign documents (legally) and “validator” to validate documents.
	 * @see MemberTypes
	 * @enum [ signer, validator ].
	 * @default signer
	 */
	type?: TMemberTypes
	/** Firstname of an external member. Required if user field is blank */
	firstname?: string
	/** Lastname of an external member. Required if user field is blank */
	lastname?: string
	/** Email of an external member. Required if user field is blank */
	email?: string
	/** Phone of an external member. Required if user field is blank */
	phone?: string
	/** If the procedure have the boolean “ordered” at true, you can define position of the order to invite your members to sign. When the first member have signed, the second will be invited, etc … Only the first member will be invited to sign. */
	position?: number
	/** List of file this member has to sign or validate  */
	fileObjects?: IFileObjectInput[]
	/** Procedure id reference */
	procedure?: string
}
