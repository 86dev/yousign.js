import axios from "axios"
import { FileObjectInputWithoutFileReference } from "./FileObjectInputWithoutFileReference"
import { IServerStamp, TServerStampStatus } from "./interface/IServerStamp"
import { ServerStampConfig } from "./ServerStampConfig"
import { ServerStampInput } from "./ServerStampInput"
import _ from "./Tools"

export class ServerStamp extends ServerStampInput implements IServerStamp {
	/**
	 * Read a ServerStamp
	 * @param {string} id ServerStamp ID
	 * @return {Promise<ServerStamp>}
	 */
	public static read(id: string): Promise<ServerStamp> {
		return axios.get(id).then((response) => {
			return new this(response.data)
		})
	}
	/** Base API URL */
	protected static path: string = "/server_stamps"
	/** Resource server stamp uri */
	public id: string = null
	/** Creation date */
	public createdAt: string = null
	/** Update date */
	public updatedAt: string = null
	/** Finish date */
	public finishedAt: string = null
	/**
	 * Status
	 * @see ServerStampStatus
	 * @enum [ pending, processing, done ]
	 */
	public status: TServerStampStatus = null
	/** Resource company uri */
	public company: string = null
	/** Base API URL */
	protected readonly path: string = "/server_stamps"
	/**
	 * Constructor
	 * @param {IServerStamp} data The data used to fill the instance
	 */
	constructor(data: IServerStamp = {}) {
		super()
		this.fill(data)
	}
	/**
	 * Fill the object
	 * @param {IServerStamp} data The data used to fill the instance
	 */
	public fill(data: IServerStamp) {
		if (_.isEmpty(data)) { return }

		_.extendOwn(this, _.pick(data, "id", "createdAt", "updatedAt", "finishedAt", "status", "company", "file", "certificate", "signImage"))

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
	/**
	 * Create this ServerStamp
	 * @return Promise<ServerStamp>
	 */
	public post(): Promise<ServerStamp> {
		const data = new ServerStampInput(this)
		return axios.post(this.path, data).then((response) => {
			this.fill(response.data)
			return this
		})
	}
}
