import axios from "axios"
import { AuthenticationInwebo } from "./AuthenticationInwebo"
import { TAuthenticationModes } from "./interface/ICompanyConfig"
import { IOperation, TOperationStatus, TOperationTypes } from "./interface/IOperation"
import _ from "./Tools"

export class Operation implements IOperation {
	/**
	 * Read a Operation
	 * @param {string} id Operation ID
	 * @return {Promise<Operation>}
	 */
	public static read(id: string): Promise<Operation> {
		return axios.get(id).then((response) => {
			return new this(response.data)
		})
	}
	/** Base API URL */
	protected static path: string = "/operations"
	/** Id of operation */
	public id: string = null
	/** Date of creation */
	public createdAt: string = null
	/** Last date of update */
	public updatedAt: string = null
	/** Authentication */
	public authentication: AuthenticationInwebo = new AuthenticationInwebo()
	/**
	 * Mode of authentication.
	 * @see AuthenticationModes
	 * @enum: [ sms, inwebo, email ]
	 */
	public mode: TAuthenticationModes = null
	/**
	 * Status of operation.
	 * @see OperationStatus
	 * @enum [ pending, done, error ]
	 */
	public status: TOperationStatus = null
	/**
	 * Type of operation.
	 * @See OperationTypes
	 * @enum [ accept, refuse ]
	 */
	public type: TOperationTypes = null
	/** Base API URL */
	protected readonly path: string = "/operations"
	/**
	 * Constructor
	 * @param {IOperation} data The data used to fill the instance
	 */
	constructor(data: IOperation = {}) {
		this.fill(data)
	}
	/**
	 * Fill the object
	 * @param {IOperation} data The data used to fill the instance
	 */
	public fill(data: IOperation) {
		if (_.isEmpty(data)) { return }

		_.extendOwn(this, _.pick(data, "id", "createdAt", "updatedAt", "mode", "status", "type"))

		if (data.authentication) {
			this.authentication = data.authentication instanceof AuthenticationInwebo ? data.authentication : new AuthenticationInwebo(data.authentication)
		}
	}
	/**
	 * Create this Operation
	 * @return Promise<Operation>
	 */
	public post(): Promise<Operation> {
		return axios.post(this.path, this).then((response) => {
			this.fill(response.data)
			return this
		})
	}
}
