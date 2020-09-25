import { IFileObjectInputWithoutFileReference } from "./IFileObjectInputWithoutFileReference"
import { IServerStampConfig } from "./IServerStampConfig"

export interface IServerStampInput {
	/** Resource file uri */
	file?: string
	/** Resource certificate uri (please contact support for more informations) */
	certificate?: string
	/** Configuration */
	config?: IServerStampConfig[]
	/** File list */
	fileObjects?: IFileObjectInputWithoutFileReference[]
	/**
	 * Image signature in base 64.
	 * @example R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7...
	 */
	signImage?: string
}
