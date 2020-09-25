import { CompanyConfig } from "./CompanyConfig"
import { ICompany } from "./interface/ICompany"
import _ from "./Tools"

export class Company implements ICompany {
	/** Object’s ID */
	public id: string = null
	/** Company name */
	public name: string = null
	/** Company logo */
	public logo: string = null
	/** Custom URL for the Company (internal usage only, should not be used) */
	public url: string = null
	/** Configuration */
	public config: CompanyConfig = new CompanyConfig()
	/** Created date of the object */
	public createdAt: string = null
	/** Updated date of the object */
	public updatedAt: string = null
	/** Define if comments are available for the company. */
	public procedureCommentsEnabled: boolean = false
	/** Default procedure email from name for company */
	public emailProcedureFromName: string = null
	/** Pattern of the password policy for the company */
	public passwordPolicyPattern: string = null
	/** Description for the password policy */
	public passwordPolicyDescription: string = null
	/** Defined if the company anable the related files */
	public procedureRelatedFilesEnable: boolean = false
	/**
	 * Constructor
	 * @param {ICompany} data The data used to fill the instance
	 */
	constructor(data: ICompany = {}) {
		_.extendOwn(this, _.pick(data, "id", "name", "logo", "url", "createdAt", "updatedAt", "procedureCommentsEnabled", "emailProcedureFromName", "passwordPolicyPattern", "passwordPolicyDescription", "procedureRelatedFilesEnable"))

		if (data.config) {
			this.config = data.config instanceof CompanyConfig ? data.config : new CompanyConfig(data.config)
		}
	}
}
