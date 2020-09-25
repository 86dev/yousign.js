import axios, { AxiosResponse } from "axios"
import { IUser } from "./interface/IUser"
import _ from "./Tools"
import { UserGroup } from "./UserGroup"
import { UserInput } from "./UserInput"
import { UserUpdateInput } from "./UserUpdateInput"

export class User implements IUser {
	/**
	 * List all users
	 * @return {Promise<AxiosResponse<User[]>}
	 */
	public static list(): Promise<AxiosResponse<User[]>> {
		return axios.get(this.path).then((response: AxiosResponse<IUser>) => {
			response.data.forEach((item: IUser, index: number, array: User[]) => {
				array[index] = new this(item)
			})
			return response
		})
	}
	/**
	 * Read a user
	 * @param {string} id User ID
	 * @return {Promise<User>}
	 */
	public static read(id: string): Promise<User> {
		return axios.get(id).then((response) => {
			return new this(response.data)
		})
	}
	/** BASE API URL */
	protected static readonly path: string = "/users"
	/** Object’s ID */
	public id: string = null
	/** User’s email address */
	public email: string = null
	/** User’s firstname */
	public firstname: string = null
	/** User’s lastname */
	public lastname: string = null
	/** User’s title */
	public title: string = null
	/** User’s phone number (mobiles and landline telephones are supported). Phone number must be formatted to E164 (https://en.wikipedia.org/wiki/E.164) which includes the symbol ‘+’ and the country code. For example : +33612131315. All countries are supported. */
	public phone: string = null
	/** Company’s ID */
	public company: string = null
	/** User’s UserGroup */
	public group: UserGroup = new UserGroup()
	/** ID of the default sign image. */
	public defaultSignImage: string = null
	/** User’s full name */
	public fullName: string = null
	/**
	 * User’s status
	 * @enum {string} not_activated, activated
	 */
	public status: "not_activated" | "activated" = null
	/** Created date of the object */
	public createdAt: string = null
	/** Updated date of the object */
	public updatedAt: string = null
	/** Defines if the User is deleted or not */
	public deleted: boolean = false
	/** Defines the date where the user has been deleted */
	public deletedAt: string = null
	/** ID of SAML */
	public samlNameId: string = null
	/** Defines if the fast signature is available for the user on the Yousign application */
	public fastSign: boolean = false
	/** Defines if the notifications are enable ou disable for entities */
	public notifications: any = {}
	/** Configuration */
	public config: any = {}
	/** BASE API URL */
	protected readonly path: string = "/users"
	/**
	 * Constructor
	 * @param {IUser} data The data used to fill the instance
	 */
	constructor(data: IUser = {}) {
		this.fill(data)
	}
	/**
	 * Fill the object
	 * @param {IUser} data The data used to fill the instance
	 */
	public fill(data: IUser) {
		if (_.isEmpty(data)) { return }

		_.extendOwn(this, _.pick(data, "id", "email", "firstname", "lastname", "title", "phone", "company", "defaultSignImage", "fullName", "status", "createdAt", "updatedAt", "deleted", "deletedAt", "samlNameId", "fastSign", "notifications", "config"))

		if (data.group) {
			this.group = data.group instanceof UserGroup ? data.group
				: typeof (data.group) !== "string" ? new UserGroup(data.group)
					: null
		}
	}
	/**
	 * Create this user
	 * @return Promise<User>
	 */
	public post(): Promise<User> {
		const data = new UserInput(this)
		return axios.post(this.path, data).then((response) => {
			this.fill(response.data)
			return this
		})
	}
	/**
	 * Update this user
	 * @param {UserUpdateInput} data
	 * @return Promise<User>
	 */
	public put(data: UserUpdateInput = null): Promise<User> {
		if (data === null) { data = new UserUpdateInput(this) }
		return axios.put(this.id, data).then((response) => {
			this.fill(response.data)
			return this
		})
	}
	/**
	 * Delete this object
	 * @return Promise<AxiosResponse<any>>
	 */
	public delete(): Promise<AxiosResponse<any>> {
		return axios.delete(this.id)
	}
}
