import { IFileObjectInputWithoutFileReference } from "./interface/IFileObjectInputWithoutFileReference"
import _ from "./Tools"

export class FileObjectInputWithoutFileReference implements IFileObjectInputWithoutFileReference {
	/** Page of the visible signature. This property is ignored if fieldName is set. If you want a visible signature, you must set page, position and fieldName. */
	public page: number = null
	/**
	 * Coordinates of the signature image to set. Format is : "llx,lly,urx,ury". llx=left lower x coordinate, lly=left lower y coordinate, urx=upper right x coordinate, ury = upper right y coordinate. To get easily coordinates, you could use this tool : http://placeit.yousign.fr Pattern: /^\d+(,\d+){3}$/
	 * @example: 400,700,500,800
	 */
	public position: string = null
	/** Name of the signature field existing in the document, it will be not used on the signature image. */
	public fieldName: string = null
	/** Text associated above the signature image. You can use some variable inside : {{date.en}} {{date.fr}} {{time.en}} {{time.fr}} that it will be parsed to show the date of the signature. */
	public mention: string = null
	/** Text associated below the signature image. You can use some variable inside : {{date.en}} {{date.fr}} {{time.en}} {{time.fr}} that it will be parsed to show the date of the signature. */
	public mention2: string = null
	/**
	 * Constructor
	 * @param {IFileObjectInputWithoutFileReference} data The data used to fill the instance
	 */
	constructor(data: IFileObjectInputWithoutFileReference = {}) {
		_.extendOwn(this, _.pick(data, "page", "position", "fieldName", "mention", "mention2"))
		if (this.fieldName === "") { this.fieldName = null }
		if (this.page === 0) { this.page = null }
		if (this.position === "") { this.position = null }
	}
}
