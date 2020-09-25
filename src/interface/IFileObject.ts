import { IFileObjectInput } from "./IFileObjectInput"
import { IFileObjectWithoutFileReference } from "./IFileObjectWithoutFileReference"
import { IYsFile } from "./IYsFile"

export interface IFileObject extends IFileObjectInput, IFileObjectWithoutFileReference {
	/** File id reference */
	file?: IYsFile
}
