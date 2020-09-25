import { IUserUpdateInput } from "./IUserUpdateInput"

export interface IUserInput extends IUserUpdateInput {
	/** User’s email address */
	email?: string
}
