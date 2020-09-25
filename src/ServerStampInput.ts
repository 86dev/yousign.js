import { FileObjectInputWithoutFileReference } from "./FileObjectInputWithoutFileReference"
import { IServerStampInput } from "./interface/IServerStampInput"
import { ServerStampConfig } from "./ServerStampConfig"
import _ from "./Tools"

export class ServerStampInput implements IServerStampInput {
	/** Resource file uri */
	public file: string = null
	/** Resource certificate uri (please contact support for more informations) */
	public certificate: string = null
	/** Configuration */
	public config: ServerStampConfig[] = []
	/** File list */
	public fileObjects: FileObjectInputWithoutFileReference[] = []
	/**
	 * Image signature in base 64.
	 * @example R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7...
	 */
	public signImage: string = null
	/**
	 * Constructor
	 * @param {IServerStampInput} data The data used to fill the instance
	 */
	constructor(data: IServerStampInput = {}) {
		_.extendOwn(this, _.pick(data, "file", "certificate", "signImage"))

		if (data.config && _.isArray(data.config)) {
			data.config.forEach((item) => {
				this.config.push(item instanceof ServerStampConfig ? item : new ServerStampConfig(item))
			})
		}
		if (data.fileObjects && _.isArray(data.fileObjects)) {
			data.fileObjects.forEach((item) => {
				this.fileObjects.push(item instanceof FileObjectInputWithoutFileReference ? item : new FileObjectInputWithoutFileReference(item))
			})
		}
	}
}
