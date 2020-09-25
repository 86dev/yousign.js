import { IFileObject } from "./IFileObject"
import { IMemberInput } from "./IMemberInput"

export const MemberStatus = ["pending", "processing", "done", "refused"]
export type  TMemberStatus = "pending" | "processing" | "done" | "refused"

export interface IMember extends IMemberInput {
	/** Id of the object */
	id?: string
	/** Creation date */
	createdAt?: string
	/** Update date */
	updatedAt?: string
	/**
	 * Member status
	 * @see MemberStatus
	 * @enum [ pending, processing, done, refused ]
	 */
	status?: TMemberStatus
	/** Comment of a member when he refuses a signature */
	comment?: string
	/** List of file this member has to sign or validate  */
	fileObjects?: IFileObject[]
}
