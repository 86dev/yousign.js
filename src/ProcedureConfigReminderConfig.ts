import { IProcedureConfigReminderConfig } from "./interface/IProcedureConfigReminderConfig"
import { ProcedureConfigReminderConfigEmail } from "./ProcedureConfigReminderConfigEmail"

export class ProcedureConfigReminderConfig implements IProcedureConfigReminderConfig {
	/** Reminder email configuration */
	public email: ProcedureConfigReminderConfigEmail = new ProcedureConfigReminderConfigEmail()
	/**
	 * Constructor
	 * @param {IProcedureConfigReminderConfig} data The data used to fill the instance
	 */
	constructor(data: IProcedureConfigReminderConfig = {}) {
		if (data.email) {
			this.email = data.email instanceof ProcedureConfigReminderConfigEmail ? data.email : new ProcedureConfigReminderConfigEmail(data.email)
		}
	}
}
