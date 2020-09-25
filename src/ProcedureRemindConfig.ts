import { IProcedureRemindConfig } from "./interface/IProcedureRemindConfig"
import { ProcedureRemindConfigEmail } from "./ProcedureRemindConfigEmail"

export class ProcedureRemindConfig implements IProcedureRemindConfig {
	/** Email configuration */
	public email: ProcedureRemindConfigEmail = new ProcedureRemindConfigEmail()
	/**
	 * Constructor
	 * @param {IProcedureRemindConfig} data The data used to fill the instance
	 */
	constructor(data: IProcedureRemindConfig = {}) {
		if (data.email) {
			this.email = data.email instanceof ProcedureRemindConfigEmail ? data.email : new ProcedureRemindConfigEmail(data.email)
		}
	}
}
