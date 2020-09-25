import axios from "axios"
import { IAuthenticationSms } from "./interface/IAuthenticationSms"
import _ from "./Tools"

export class AuthenticationSms implements IAuthenticationSms {
	/**
	 * Read a AuthenticationSms
	 * @param {string} id AuthenticationSms ID
	 * @return {Promise<AuthenticationSms>}
	 */
	public static read(id: string): Promise<AuthenticationSms> {
		return axios.get(id).then((response) => {
			return new this(response.data)
		})
	}
	/** Base API URL */
	protected static path: string = "/authentications/sms";
	/** ID of authentication */
	public id: string = null
	/**
	 * Status of authentication.
	 * @enum [ active, expired, used, reached ]
	 */
	public status: "active" | "expired" | "used" | "reached" = null
	/** Type of authentication */
	public type: string = null
	/**
	 * Constructor
	 * @param {IAuthenticationSms} data The data used to fill the instance
	 */
	constructor(data: IAuthenticationSms = {}) {
		this.fill(data)
	}
	/**
	 * Fill the object
	 * @param {IAuthenticationSms} data The data used to fill the instance
	 */
	public fill(data: IAuthenticationSms) {
		if (_.isEmpty(data)) { return }

		_.extendOwn(this, _.pick(data, "id", "status", "type"))
	}
	/**
	 * Update this AuthenticationSms
	 * @param {Object} data
	 * @param {string} data.signImage Image of signature (base 64)
	 * @param {string} data.code Code sms received by user
	 * @return Promise<AuthenticationSms>
	 */
	public put(data: object): Promise<AuthenticationSms> {
		return axios.put(this.id, data).then((response) => {
			this.fill(response.data)
			return this
		})
	}
}
