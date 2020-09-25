import { IServerStampConfig } from "./interface/IServerStampConfig"
import { ServerStampConfigWebhook } from "./ServerStampConfigWebhook"

export class ServerStampConfig implements IServerStampConfig {
	/** Webhook configuration */
	public webhook: ServerStampConfigWebhook = new ServerStampConfigWebhook()
	/**
	 * Constructor
	 * @param {IServerStampConfig} data The data used to fill the instance
	 */
	constructor(data: IServerStampConfig = {}) {
		if (data.webhook) {
			this.webhook = data.webhook instanceof ServerStampConfigWebhook ? data.webhook : new ServerStampConfigWebhook(data.webhook)
		}
	}
}
