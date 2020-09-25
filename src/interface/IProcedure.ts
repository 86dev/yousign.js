import { IMember } from "./IMember"
import { IProcedureInput } from "./IProcedureInput"
import { IYsFile } from "./IYsFile"

export const ProcedureStatus = ["draft", "active", "finished", "expired", "refused"]

export type TProcedureStatus = "draft" | "active" | "finished" | "expired" | "refused"

export interface IProcedure extends IProcedureInput {
	/** Id of the object */
	id?: string
	/** Created date of the object */
	createdAt?: string
	/** Updated date of the object */
	updatedAt?: string
	/**
	 * Status of the procedure.
	 * @enum [ draft, active, finished, expired, refused ]
	 */
	status?: TProcedureStatus
	/** Id of creator of the object */
	creator?: string
	/** The creator’s first name */
	creatorFirstName?: string
	/** The creator’s last name */
	creatorLastName?: string
	/** Id of a procedure template used to get all properties of the template in the new procedure. If you set other properties, they will be replaced. If you don’t set other properties, all properties will be cloned. */
	parent?: string
	/** List of files used in the procedure. */
	files?: IYsFile[]
	/** List of members, REQUIRED if start field is true. */
	members?: IMember[]
}
