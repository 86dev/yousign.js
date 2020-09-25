import { FileObjectInputWithoutFileReference } from "./FileObjectInputWithoutFileReference"
import { IFileObjectInput } from "./interface/IFileObjectInput"
import _ from "./Tools"
import { YsFile } from "./YsFile"

export class FileObjectInput extends FileObjectInputWithoutFileReference implements IFileObjectInput {
	/** File id reference */
	public file: string = null
	/** Member id reference */
	public member: string = null
	/**
	 * Constructor
	 * @param {IFileObjectInput} data The data used to fill the instance
	 */
	constructor(data: IFileObjectInput = {}) {
		super(data)
		_.extendOwn(this, _.pick(data, "member"))

		if (data.file) {
			if (typeof (data.file) === "string") {
				this.file = data.file
			} else if (data.file instanceof YsFile && data.file.id) {
				this.file = data.file.id
			}
		}
	}
}
