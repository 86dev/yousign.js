import { IUserInput } from "./IUserInput"

export const UserStatus = ["not_activated", "activated"]

export type TUserStatus = "not_activated" | "activated"

export interface IUser extends IUserInput {
	/** Object's ID */
	id?: string
	/** User’s full name */
	fullName?: string
	/**
	 * User’s status
	 * @see UserStatus
	 * @enum {string} [ not_activated, activated ]
	 */
	status?: TUserStatus
	/** Created date of the object */
	createdAt?: string
	/** Updated date of the object */
	updatedAt?: string
	/** ID of SAML */
	samlNameId?: string
	/** Defines if the fast signature is available for the user on the Yousign application */
	fastSign?: boolean
	/** Defines if the User is deleted or not */
	deleted?: boolean
	/** Defines the date where the user has been deleted */
	deletedAt?: string
}
