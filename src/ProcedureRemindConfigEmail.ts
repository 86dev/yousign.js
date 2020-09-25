import { ConfigEmailTemplate } from "./ConfigEmailTemplate"
import { IProcedureRemindConfigEmail } from "./interface/IProcedureRemindConfigEmail"
import _ from "./Tools"

export class ProcedureRemindConfigEmail implements IProcedureRemindConfigEmail {
	/** Email sent when reminder is executed */
	public "reminder.executed": ConfigEmailTemplate[] = []
	/**
	 * Constructor
	 * @param {IProcedureRemindConfigEmail} data The data used to fill the instance
	 */
	constructor(data: IProcedureRemindConfigEmail = {}) {
		if (data["reminder.executed"] && _.isArray(data["reminder.executed"])) {
			data["reminder.executed"].forEach((item) => {
				this["reminder.executed"].push(item instanceof ConfigEmailTemplate ? item : new ConfigEmailTemplate(item))
			})
		}
	}
}
