import { IUserGroup } from "./IUserGroup"

export interface IUserUpdateInput {
	/** User’s firstname */
	firstname?: string
	/** User’s lastname */
	lastname?: string
	/** User’s title */
	title?: string
	/** User’s phone number (mobiles and landline telephones are supported). Phone number must be formatted to E164 (https://en.wikipedia.org/wiki/E.164) which includes the symbol ‘+’ and the country code. For example : +33612131315. All countries are supported. */
	phone?: string
	/** Company’s ID */
	company?: string
	/** ID of the default sign image. */
	defaultSignImage?: string
	/** User’s UserGroup */
	group?: string | IUserGroup
	/** Defines if the notifications are enable ou disable for entities */
	notifications?: any
	/** User configuration */
	config?: any
}
