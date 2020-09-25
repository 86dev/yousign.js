import { IProcedureConfigReminder } from "./interface/IProcedureConfigReminder"
import { ProcedureConfigReminderConfig } from "./ProcedureConfigReminderConfig"
import _ from "./Tools"

export class ProcedureConfigReminder implements IProcedureConfigReminder {
	/** Number of days between each reminder. The date of the creation of the procedure is used to define the date of the reminder. For example, if you set 2 and the procedure is created at 2017-01-01T15:03:01, the first reminder will be sent at 2017-01-03T15:03:01. Minimum: 1. Default: 1 */
	public interval: number = 1
	/** Limit of reminders sent. Minimum: 1. Maximum: 90. Default: 5 */
	public limit: number = 5
	/** Configuration */
	public config: ProcedureConfigReminderConfig = new ProcedureConfigReminderConfig()
	/**
	 * Constructor
	 * @param {IProcedureConfigReminder} data The data used to fill the instance
	 */
	constructor(data: IProcedureConfigReminder = {}) {
		_.extendOwn(this, _.pick(data, "interval", "limit"))

		if (data.config) {
			this.config = data.config instanceof ProcedureConfigReminderConfig ? data.config : new ProcedureConfigReminderConfig(data.config)
		}
	}
}
