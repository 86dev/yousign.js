import { IConfigWebhookTemplate } from "./interface/IConfigWebhookTemplate";
import _ from "./Tools"

export class ConfigWebhookTemplate implements IConfigWebhookTemplate {
	/** Url to call */
	url: string = null;
	/**
	 * Http request type.
	 * @enum [ GET, POST, PUT, PATCH ]
	 * @default GET
	 */
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' = 'GET';
	/** Http request headers */
	headers: any = {};
	/**
	 * Constructor
	 * @param {IConfigWebhookTemplate} data The data used to fill the instance
	 */
	constructor(data: IConfigWebhookTemplate = {}) {
		_.extendOwn(this, _.pick(data, 'url', 'method', 'headers'))
	}
}