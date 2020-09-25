import { ISignatureUIInput } from "./ISignatureUIInput"

export interface ISignatureUI extends ISignatureUIInput {
	/** Resource’s ID */
	id?: string
	/** Creator’s ID */
	creator?: string
	/** Associated Company’s ID */
	company?: string
	/** Date of creation */
	createdAt?: string
	/** Date of last update */
	updatedAt?: string
}
