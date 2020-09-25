import axios from "axios"
import { IAuthenticationInwebo } from "./interface/IAuthenticationInwebo"
import _ from "./Tools"

export class AuthenticationInwebo implements IAuthenticationInwebo {
	/**
	 * Read a AuthenticationInwebo
	 * @param {string} id AuthenticationInwebo ID
	 * @return {Promise<AuthenticationInwebo>}
	 */
	public static read(id: string): Promise<AuthenticationInwebo> {
		return axios.get(id).then((response) => {
			return new this(response.data)
		})
	}
	/** Base API URL */
	protected static path: string = "/authentications/inwebo"
	/** ID of authentication */
	public id: string = null
	/**
	 * Status of authentication.
	 * @enum [ waiting, refused, timeout, ok ]
	 */
	public status: "waiting" | "refused" | "timeout" | "ok" = null
	/** Type of authentication */
	public type: string = null
	/** Base API URL */
	protected readonly path: string = "/authentications/inwebo"
	/**
	 * Constructor
	 * @param {AuthenticationInweboData} data The data used to fill the instance
	 */
	constructor(data: IAuthenticationInwebo = {}) {
		this.fill(data)
	}
	/**
	 * Fill the object
	 * @param {AuthenticationInweboData} data The data used to fill the instance
	 */
	public fill(data: IAuthenticationInwebo) {
		if (_.isEmpty(data)) { return }

		_.extendOwn(this, _.pick(data, "id", "status", "type"))
	}
	/**
	 * Update
	 * @param {Object} data
	 * @param {string} data.signImage Image of signature (base 64)
	 * @return Promise<AuthenticationInwebo>
	 */
	public put(data: { signImage: string } = null): Promise<AuthenticationInwebo> {
		return axios.put(this.id, data).then((response) => {
			this.fill(response.data)
			return this
		})
	}
}
