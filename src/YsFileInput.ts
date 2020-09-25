import { IYsFileInput, TYsFileTypes } from "./interface/IYsFileInput"
import _ from "./Tools"

export class YsFileInput implements IYsFileInput {
	/** Name of the file */
	public name: string = null
	/**
	 * Type of the file.
	 * @enum: [ signable, sign_image, company_logo, attachment ]
	 */
	public type: TYsFileTypes = null
	/** Password for protected PDF file */
	public password: string = null
	/** Description of the file */
	public description: string = null
	/** Metadata of the file */
	public metadata: any = []
	/** Content in base 64 of the file */
	public content: string = null
	/** Id of the procedure */
	public procedure: string = null
	/**
	 * Constructor
	 * @param {YsFileInputData} data The data used to fill the instance
	 */
	constructor(data: IYsFileInput = {}) {
		_.extendOwn(this, _.pick(data, "name", "type", "password", "description", "metadata", "content", "procedure"))
	}
}
