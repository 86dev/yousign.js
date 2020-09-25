import { IProcedureConfigEmail } from "./IProcedureConfigEmail"
import { IProcedureConfigReminder } from "./IProcedureConfigReminder"
import { IProcedureConfigWebhook } from "./IProcedureConfigWebhook"

export interface IProcedureConfig {
	/** Emails configuration */
	email?: IProcedureConfigEmail,
	/** Reminders configuration */
	reminders?: IProcedureConfigReminder[],
	/** Webhooks configuration */
	webhook?: IProcedureConfigWebhook,
}
