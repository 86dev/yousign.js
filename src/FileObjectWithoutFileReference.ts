import { FileObjectInputWithoutFileReference } from "./FileObjectInputWithoutFileReference"
import { IFileObjectWithoutFileReference } from "./interface/IFileObjectWithoutFileReference"
import _ from "./Tools"

export class FileObjectWithoutFileReference
	extends FileObjectInputWithoutFileReference
	implements IFileObjectWithoutFileReference {
	/** Id of the object */
	public id: string = null
	/** Created date of the object */
	public createdAt: string = null
	/** Updated date of the object */
	public updatedAt: string = null
	/** Date of signature or validation */
	public executedAt: string = null
	/**
	 * Constructor
	 * @param {IFileObjectWithoutFileReference} data The data used to fill the instance
	 */
	constructor(data: IFileObjectWithoutFileReference = {}) {
		super(data)
		_.extendOwn(this, _.pick(data, "id", "createdAt", "updatedAt", "executedAt"))
	}
}
