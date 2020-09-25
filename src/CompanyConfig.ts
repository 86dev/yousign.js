import { ICompanyConfig } from "./interface/ICompanyConfig"
import _ from "./Tools"

export class CompanyConfig implements ICompanyConfig {
	/**
	 * Authentication mode
	 * @enum {string} [ sms, inwebo ]
	 */
	public authenticationModes: "sms" | "inwebo" = null
	/**
	 * Constructor
	 * @param {ICompanyConfig} data The data used to fill the instance
	 */
	constructor(data: ICompanyConfig = {}) {
		_.extendOwn(this, _.pick(data, "authenticationModes"))
	}
}
