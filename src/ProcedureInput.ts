import { IProcedureInput } from "./interface/IProcedureInput"
import { MemberInput } from "./MemberInput"
import { ProcedureConfig } from "./ProcedureConfig"
import _ from "./Tools"

export class ProcedureInput implements IProcedureInput {
	/** Name of procedure */
	public name: string
	/** Description of procedure */
	public description: string
	/** Expiration date. The procedure will be out of usage after this date. */
	public expiresAt: string
	/** Override the parent value for this property and defines if the new procedure should be a template or not. Default: false */
	public template: boolean
	/** Defines an order for the procedure process. If true, position of each member will be used to define the validation workflow. */
	public ordered: boolean
	/** Procedure extra data */
	public metadata: any
	/** Configuration */
	public config: ProcedureConfig
	/** List of members, REQUIRED if start field is true. */
	public members: MemberInput[]
	/** Defines if the new procedure should be started after the duplication. Default: false */
	public start: boolean = false
	/** Defines if related files are available. Used only for company that have this option. */
	public relatedFilesEnable: boolean
	/** Defines if the files of the procedure must be archived (Company should be allowed). Default: false */
	public archive: boolean
	/**
	 * Constructor
	 * @param {ProcedureData} data The data used to fill the instance
	 */
	constructor(data: IProcedureInput = {}) {
		_.extendOwn(this, _.pick(data, "name", "description", "expiresAt", "template", "ordered", "metadata", "start", "relatedFilesEnable", "archive"))

		if (data.config) {
			this.config = data.config instanceof ProcedureConfig ? data.config : new ProcedureConfig(data.config)
		}
		if (data.members && _.isArray(data.members)) {
			this.members = []
			data.members.forEach((item) => {
				this.members.push(item instanceof MemberInput ? item : new MemberInput(item))
			})
		}
	}
}
