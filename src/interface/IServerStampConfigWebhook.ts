import { IConfigWebhookTemplate } from "./IConfigWebhookTemplate"

export interface IServerStampConfigWebhook {
	/** Webhook executed when server stamp is finished */
	"server_stamp.finished"?: IConfigWebhookTemplate[]
}
