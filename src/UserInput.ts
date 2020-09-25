import { IUserInput } from "./interface/IUserInput"
import { UserUpdateInput } from "./UserUpdateInput"

export class UserInput extends UserUpdateInput implements IUserInput {
	/** User’s email address */
	public email: string = null
	/**
	 * Constructor
	 * @param {IUserInput} data
	 */
	constructor(data: IUserInput = {}) {
		super(data)
	}
}
