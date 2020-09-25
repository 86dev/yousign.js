import { IProcedureConfig } from "./interface/IProcedureConfig"
import { ProcedureConfigEmail } from "./ProcedureConfigEmail"
import { ProcedureConfigReminder } from "./ProcedureConfigReminder"
import { ProcedureConfigWebhook } from "./ProcedureConfigWebhook"
import _ from "./Tools"

export class ProcedureConfig implements IProcedureConfig {
	/** Emaile configuration */
	public email: ProcedureConfigEmail = new ProcedureConfigEmail()
	/** Reminders configuration */
	public reminders: ProcedureConfigReminder[] = []
	/** Webhooks configuration */
	public webhook: ProcedureConfigWebhook = new ProcedureConfigWebhook()
	/**
	 * Constructor
	 * @param {IProcedureConfig} data The data used to fill the instance
	 */
	constructor(data: IProcedureConfig = {}) {
		if (data.email) {
			this.email = data.email instanceof ProcedureConfigEmail ? data.email : new ProcedureConfigEmail(data.email)
		}
		if (data.webhook) {
			this.webhook = data.webhook instanceof ProcedureConfigWebhook ? data.webhook : new ProcedureConfigWebhook(data.webhook)
		}
		if (data.reminders && _.isArray(data.reminders)) {
			data.reminders.forEach((item) => {
				this.reminders.push(item instanceof ProcedureConfigReminder ? item : new ProcedureConfigReminder(item))
			})
		}
	}
}
