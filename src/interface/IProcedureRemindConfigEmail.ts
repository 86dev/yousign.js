import { IConfigEmailTemplate } from "./IConfigEmailTemplate"

export interface IProcedureRemindConfigEmail {
	/** Email sent when reminder is executed */
	"reminder.executed"?: IConfigEmailTemplate[]
}
