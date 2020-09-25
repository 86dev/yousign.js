import { IProcedureConfigReminderConfig } from "./IProcedureConfigReminderConfig"

export interface IProcedureConfigReminder {
	/** Number of days between each reminder. The date of the creation of the procedure is used to define the date of the reminder. For example, if you set 2 and the procedure is created at 2017-01-01T15:03:01, the first reminder will be sent at 2017-01-03T15:03:01. Minimum: 1. Default: 1 */
	interval?: number
	/** Limit of reminders sent. Minimum: 1. Maximum: 90. Default: 5 */
	limit?: number
	/** Reminder configuration */
	config?: IProcedureConfigReminderConfig
}
