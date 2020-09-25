export const WebhookMethods = ["GET", "POST", "PUT", "PATCH"]

export type TWebhookMethods = "GET" | "POST" | "PUT" | "PATCH"

export interface IConfigWebhookTemplate {
	/** Url to call */
	url?: string
	/**
	 * Http request type.
	 * @see WebhookMethods
	 * @enum [ GET, POST, PUT, PATCH ]
	 * @default GET
	 */
	method?: TWebhookMethods
	/** Http request headers */
	headers?: any
}
