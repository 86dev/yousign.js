import axios, { AxiosResponse } from "axios"
import * as $ from "jquery"
import { IProcedure } from "./interface/IProcedure"
import { Member } from "./Member"
import { ProcedureConfig } from "./ProcedureConfig"
import { ProcedureDuplicateInput } from "./ProcedureDuplicateInput"
import { ProcedureInput } from "./ProcedureInput"
import { ProcedureQuery } from "./ProcedureQuery"
import { ProcedureRemindInput } from "./ProcedureRemindInput"
import _ from "./Tools"
import { YsFile } from "./YsFile"

export class Procedure implements IProcedure {
	/**
	 * Indicates if this procedure is editable
	 */
	get editable() {
		return !this.id || this.status === "draft"
	}
	/**
	 * Indicates if this procedure is active
	 */
	get active() {
		return this.id && this.status !== "draft"
	}
	/**
	 * List all procedures
	 * @param {ProcedureQuery} params Query parameters
	 * @return {Promise<AxiosResponse<Procedure[]>>}
	 */
	public static list(params: ProcedureQuery = null): Promise<AxiosResponse<Procedure[]>> {
		if (!params) { params = new ProcedureQuery() }
		return axios.get(this.path + "?" + $.param(params)).then((response) => {
			response.data.forEach((item, index, array) => {
				array[index] = new this(item)
			})
			return response
		})
	}
	/**
	 * Read a procedure
	 * @param {string} id Procedure ID
	 * @return {Promise<Procedure>}
	 */
	public static read(id: string): Promise<Procedure> {
		return axios.get(id).then((response) => {
			return new this(response.data)
		})
	}
	/**
	 * Export procedures
	 * @param {ProcedureQuery} params Export parameters
	 * @return {Promise<string>} CSV Content
	 */
	public static export(params: ProcedureQuery = null): Promise<string> {
		if (!params) { params = new ProcedureQuery() }
		return axios.get("/exports" + this.path + "?" + $.param(params)).then((response) => response.data)
	}
	/** Base API URL */
	protected static path: string = "/procedures"
	/** Id of the object */
	public id: string = null
	/** Name of procedure */
	public name: string = null
	/** Description of procedure */
	public description: string = null
	/** Created date of the object */
	public createdAt: string = null
	/** Updated date of the object */
	public updatedAt: string = null
	/** Expiration date. The procedure will be out of usage after this date. */
	public expiresAt: string = null
	/**
	 * Status of the procedure.
	 * @enum [ draft, active, finished, expired ]
	 */
	public status: "draft" | "active" | "finished" | "expired" | "refused" = null
	/** Id of creator of the object */
	public creator: string = null
	/** The creator’s first name */
	public creatorFirstName: string = null
	/** The creator’s last name */
	public creatorLastName: string = null
	/** Company ID */
	public company: string = null
	/** Override the parent value for this property and defines if the new procedure should be a template or not. Default: false */
	public template: boolean = false
	/** Defines an order for the procedure process. If true, position of each member will be used to define the validation workflow. */
	public ordered: boolean = false
	/** Id of a procedure template used to get all properties of the template in the new procedure. If you set other properties, they will be replaced. If you don’t set other properties, all properties will be cloned. */
	public parent: string = null
	/** Procedure extra data */
	public metadata: any = []
	/** Configuration */
	public config: ProcedureConfig = new ProcedureConfig()
	/** List of members, REQUIRED if start field is true. */
	public members: Member[] = []
	/** List of files used in the procedure. */
	public files: YsFile[] = []
	/** Defines if related files are available. Used only for company that have this option. */
	public relatedFilesEnable: boolean = false
	/** Defines if the files of the procedure must be archived (Company should be allowed). Default: false */
	public archive: boolean = false
	/** Base API URL */
	protected readonly path: string = "/procedures"

	/**
	 * Constructor
	 * @param {IProcedure} data The data used to fill the instance
	 */
	constructor(data: IProcedure = {}) {
		this.fill(data)
	}
	/**
	 * Fill the object
	 * @param {IProcedure} data The data used to fill the instance
	 */
	public fill(data: IProcedure) {
		if (_.isEmpty(data)) { return }

		_.extendOwn(this, _.pick(data, "name", "description", "expiresAt", "template", "ordered", "metadata", "start", "relatedFilesEnable", "archive", "id", "createdAt", "updatedAt", "status", "creator", "creatorFirstName", "creatorLastName", "parent"))

		if (data.members && data.members.length) {
			this.members = []
			data.members.forEach((item) => {
				this.members.push(item instanceof Member ? item : new Member(item))
			})
		}

		if (data.files && data.files.length) {
			this.files = []
			data.files.forEach((item) => {
				this.files.push(item instanceof YsFile ? item : new YsFile(item))
			})
		}

		if (data.config) {
			this.config = data.config instanceof ProcedureConfig ? data.config : new ProcedureConfig(data.config)
		}
	}
	/**
	 * Create this Procedure
	 * @return Promise<Procedure>
	 */
	public post(): Promise<Procedure> {
		const data = new ProcedureInput(this)
		return axios.post(this.path, data).then((response) => {
			this.fill(response.data)
			return this
		})
	}
	/**
	 * Update this Procedure
	 * @param {ProcedureInput} data
	 * @return Promise<Procedure>
	 */
	public put(data: ProcedureInput = null): Promise<Procedure> {
		if (data === null) { data = new ProcedureInput(this) }
		return axios.put(this.id, data).then((response) => {
			this.fill(response.data)
			return this
		})
	}
	/**
	 * Delete this object
	 * @return Promise<AxiosResponse<any>>
	 */
	public delete(): Promise<AxiosResponse<any>> {
		return axios.delete(this.id)
	}
	/**
	 * Duplicate this procedure
	 * @param data Duplicate information
	 * @return {Promise<Procedure>} The new procedure
	 */
	public duplicate(data: ProcedureDuplicateInput = null): Promise<Procedure> {
		if (data === null) { data = new ProcedureDuplicateInput() }
		return axios.post(this.id + "/duplicate", data).then((response) => new Procedure(response.data))
	}
	/**
	 * Remind this Procedure
	 * @param {ProcedureRemindInput} data
	 * @return {Promise<AxiosResponse<IProcedure>>}
	 */
	public remind(data: ProcedureRemindInput): Promise<AxiosResponse<IProcedure>> {
		return axios.post(this.id + "/remind", data)
	}
	/**
	 * Return a base 64 content zip file that contains all members proof file.
	 * @return {Promise<string>}
	 */
	public proof(): Promise<string> {
		return axios.get(this.id + "/proof").then((response) => response.data)
	}
}
