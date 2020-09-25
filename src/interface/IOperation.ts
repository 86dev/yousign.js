import { IAuthenticationInwebo } from "./IAuthenticationInwebo"
import { TAuthenticationModes } from "./ICompanyConfig"

export const OperationStatus = ["pending", "done", "error"]

export const OperationTypes = ["accept", "refuse"]

export type TOperationStatus = "pending" | "done" | "error"

export type TOperationTypes = "accept" | "refuse"

export interface IOperation {
	/** Id of operation */
	id?: string
	/** Date of creation */
	createdAt?: string
	/** Last date of update */
	updatedAt?: string
	/** Operation authentication */
	authentication?: IAuthenticationInwebo
	/**
	 * Mode of authentication.
	 * @see AuthenticationModes
	 * @enum: [ sms, inwebo, email ]
	 */
	mode?: TAuthenticationModes
	/**
	 * Status of operation.
	 * @see OperationStatus
	 * @enum [ pending, done, error ]
	 */
	status?: TOperationStatus
	/**
	 * Type of operation.
	 * @see OperationTypes
	 * @enum [ accept, refuse ]
	 */
	type?: TOperationTypes
}
