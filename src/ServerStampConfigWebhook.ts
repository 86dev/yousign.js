import { ConfigWebhookTemplate } from "./ConfigWebhookTemplate"
import { IServerStampConfigWebhook } from "./interface/IServerStampConfigWebhook"
import _ from "./Tools"

export class ServerStampConfigWebhook implements IServerStampConfigWebhook {
	/** Webhook executed when server stamp is finished */
	public "server_stamp.finished": ConfigWebhookTemplate[] = []
	/**
	 * Constructor
	 * @param {IServerStampConfigWebhook} data The data used to fill the instance
	 */
	constructor(data: IServerStampConfigWebhook = {}) {
		if (data["server_stamp.finished"] && _.isArray(data["server_stamp.finished"])) {
			data["server_stamp.finished"].forEach((item) => {
				this["server_stamp.finished"].push(item instanceof ConfigWebhookTemplate ? item : new ConfigWebhookTemplate(item))
			})
		}
	}
}
