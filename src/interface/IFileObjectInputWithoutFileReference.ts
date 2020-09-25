export interface IFileObjectInputWithoutFileReference {
	/** Page of the visible signature. This property is ignored if fieldName is set. If you want a visible signature, you must set page, position and fieldName. */
	page?: number
	/**
	 * Coordinates of the signature image to set. Format is : "llx,lly,urx,ury". llx=left lower x coordinate, lly=left lower y coordinate, urx=upper right x coordinate, ury = upper right y coordinate. To get easily coordinates, you could use this tool : http://placeit.yousign.fr Pattern: /^\d+(,\d+){3}$/
	 * @example 400,700,500,800
	 */
	position?: string
	/** Name of the signature field existing in the document, it will be not used on the signature image. */
	fieldName?: string
	/** Text associated above the signature image. You can use some variable inside : {{date.en}} {{date.fr}} {{time.en}} {{time.fr}} that it will be parsed to show the date of the signature. */
	mention?: string
	/** Text associated below the signature image. You can use some variable inside : {{date.en}} {{date.fr}} {{time.en}} {{time.fr}} that it will be parsed to show the date of the signature. */
	mention2?: string
}
