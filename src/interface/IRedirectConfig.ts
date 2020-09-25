export const RedirectTargets = ["_top", "_blank", "_parent", "_self"]

export type TRedirectTypes = "_top" | "_blank" | "_parent" | "_self"

export interface IRedirectConfig {
	/** Url of redirect */
	url?: string
	/**
	 * Target of the redirection.
	 * @see RedirectTargets
	 * @enum [ _top, _blank, _parent, _self ]
	 */
	target?: TRedirectTypes
	/**
	 * Don’t redirect the user directly, send to our detail of the procedure view. But invite the user to click on a button for use this redirection.
	 * @default false
	 */
	auto?: boolean
}
