import { IFileObjectInputWithoutFileReference } from "./IFileObjectInputWithoutFileReference"

export interface IFileObjectWithoutFileReference extends IFileObjectInputWithoutFileReference {
	/** Id of the object */
	id?: string
	/** Created date of the object */
	createdAt?: string
	/** Updated date of the object */
	updatedAt?: string
	/** Date of signature or validation */
	executedAt?: string
}
