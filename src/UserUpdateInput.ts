import { IUserUpdateInput } from "./interface/IUserUpdateInput"
import _ from "./Tools"
import { UserGroup } from "./UserGroup"

export class UserUpdateInput implements IUserUpdateInput {
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
	public group: string = null
	/** ID of the default sign image. */
	public defaultSignImage: string = null
	/** Defines if the notifications are enable ou disable for entities */
	public notifications: any = {}
	/** Configuration */
	public config: any = {}
	/**
	 * Constructor
	 * @param {UserData} data The data used to fill the instance
	 */
	constructor(data: IUserUpdateInput = {}) {
		_.extendOwn(this, _.pick(data, "firstname", "lastname", "title", "phone", "company", "defaultSignImage", "notifications", "config"))

		if (data.group) {
			this.group = data.group instanceof UserGroup ? data.group.id
				: typeof data.group === "string" ? data.group
					: null
		}
	}
}
