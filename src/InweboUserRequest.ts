import { IInweboUserRequest } from "./interface/IInweboUserRequest"
import _ from "./Tools"

export class InweboUserRequest implements IInweboUserRequest {
	/** Id of the object */
	public id: string = null
	/**
	 * Constructor
	 * @param {IInweboUserRequest} data The data used to fill the instance
	 */
	constructor(data: IInweboUserRequest = {}) {
		_.extendOwn(this, _.pick(data, "id"))
	}
}
