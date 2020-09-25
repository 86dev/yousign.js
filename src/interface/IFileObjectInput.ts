import { IFileObjectInputWithoutFileReference } from "./IFileObjectInputWithoutFileReference"

export interface IFileObjectInput extends IFileObjectInputWithoutFileReference {
	/** File id reference */
	file?: any
	/** Member id reference */
	member?: string
}
