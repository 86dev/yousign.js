import { ICompanyConfig } from "./ICompanyConfig"

export interface ICompany {
	/** Object’s ID */
	id?: string
	/** Company name */
	name?: string
	/** Company logo */
	logo?: string
	/** Custom URL for the Company (internal usage only, should not be used) */
	url?: string
	/** Company configuration */
	config?: ICompanyConfig
	/** Created date of the object */
	createdAt?: string
	/** Updated date of the object */
	updatedAt?: string
	/** Define if comments are available for the company. */
	procedureCommentsEnabled?: boolean
	/** Default procedure email from name for company */
	emailProcedureFromName?: string
	/** Pattern of the password policy for the company */
	passwordPolicyPattern?: string
	/** Description for the password policy */
	passwordPolicyDescription?: string
	/** Defined if the company anable the related files */
	procedureRelatedFilesEnable?: boolean
}
