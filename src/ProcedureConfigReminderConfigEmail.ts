import { ConfigEmailTemplate } from "./ConfigEmailTemplate"
import { IProcedureConfigReminderConfigEmail } from "./interface/IProcedureConfigReminderConfigEmail"
import _ from "./Tools"

export class ProcedureConfigReminderConfigEmail implements IProcedureConfigReminderConfigEmail {
	/** Email sent when the reminder has been executed */
	public "reminder.executed": ConfigEmailTemplate[] = []
	/**
	 * Constructor
	 * @param {IProcedureConfigReminderConfigEmail} data The data used to fill the instance
	 */
	constructor(data: IProcedureConfigReminderConfigEmail = {}) {
		if (data["reminder.executed"] && _.isArray(data["reminder.executed"])) {
			data["reminder.executed"].forEach((item) => {
				this["reminder.executed"].push(item instanceof ConfigEmailTemplate ? item : new ConfigEmailTemplate(item))
			})
		}
	}
}
