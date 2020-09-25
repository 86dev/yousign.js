export interface IUserGroup {
	/** Id of the object */
	id?: string
	/** Name of the UserGroup */
	name?: string
	/**
	 * Permissions of UserGroup.
	 * @enum {string} [ procedure, sign, company, user, api_key, contact ]
	 */
	permissions?: string[]
}
