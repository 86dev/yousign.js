import { IProcedureRemindInput } from "./interface/IProcedureRemindInput"
import { ProcedureRemindConfig } from "./ProcedureRemindConfig"

export class ProcedureRemindInput implements IProcedureRemindInput {
	/** Reminder configuration */
	public config: ProcedureRemindConfig = new ProcedureRemindConfig()
	/**
	 * Constructor
	 * @param {IProcedureRemindInput} data The data used to fill the instance
	 */
	constructor(data: IProcedureRemindInput = {}) {
		if (data.config) {
			this.config = data.config instanceof ProcedureRemindConfig ? data.config : new ProcedureRemindConfig(data.config)
		}
	}
}
