import axios, { AxiosResponse } from "axios"
import { IUserGroup } from "./interface/IUserGroup"
import _ from "./Tools"

export class UserGroup implements IUserGroup  {
	/**
	 * List all groups
	 * @return {Promise<AxiosResponse<UserGroup[]>>}
	 */
	public static list(): Promise<AxiosResponse<UserGroup[]>> {
		return axios.get(this.path).then((response) => {
			response.data.forEach((item, index, array) => {
				array[index] = new this(item)
			})
			return response
		})
	}
	/**
	 * Read a group
	 * @param {string} id UserGroup ID
	 * @return {Promise<UserGroup>}
	 */
	public static read(id: string): Promise<UserGroup> {
		return axios.get(id).then((response) => {
			return new this(response.data)
		})
	}
	/** Base API URL */
	protected static path: string = "/user_groups";
	/** Id of the object */
	public id: string = null
	/** Name of the UserGroup */
	public name: string = null
	/**
	 * Permissions of UserGroup.
	 * @enum {string} [ procedure, sign, company, user, api_key, contact ]
	 */
	public permissions: string[] = []
	/**
	 * Constructor
	 * @param {IUserGroup} data The data used to fill the instance
	 */
	constructor(data: IUserGroup = {}) {
		this.fill(data)
	}
	/**
	 * Fill the object
	 * @param {IUserGroup} data The data used to fill the instance
	 */
	public fill(data: IUserGroup) {
		if (_.isEmpty(data)) { return }

		_.extendOwn(this, _.pick(data, "id", "name", "permissions"))
	}
}
