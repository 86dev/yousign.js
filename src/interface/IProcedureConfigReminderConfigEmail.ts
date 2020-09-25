import { IConfigEmailTemplate } from "./IConfigEmailTemplate"

export interface IProcedureConfigReminderConfigEmail {
	/** Email sent when the reminder has been executed */
	"reminder.executed"?: IConfigEmailTemplate[]
}
