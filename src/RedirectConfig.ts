import { IRedirectConfig } from "./interface/IRedirectConfig";
import _ from "./Tools"

export class RedirectConfig implements IRedirectConfig {
	/** Url of redirect */
	url: string = null;
	/**
	 * Target of the redirection.
	 * @enum [ _top, _blank, _parent, _self ]
	 */
	target: '_top' | '_blank' | '_parent' | '_self' = null;
	/**
	 * Don’t redirect the user directly, send to our detail of the procedure view. But invite the user to click on a button for use this redirection.
	 * @default false
	 */
	auto: boolean = false;
	/**
	 * Constructor
	 * @param {IRedirectConfig} data The data used to fill the instance
	 */
	constructor(data: IRedirectConfig = {}) {
		_.extendOwn(this, _.pick(data, 'url', 'target', 'auto'))
	}
}