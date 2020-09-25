import { IConfigEmailTemplate } from "./interface/IConfigEmailTemplate"
import _ from "./Tools"

export class ConfigEmailTemplate implements IConfigEmailTemplate {
	/**
	 * Reference or email of recipients
	 * You can given an array of recipients.
	 * A recipient can be a specific email like my-user@email.com or a variable which is available in the list below.
	 * Enum: [ @members, @members.auto, @members.pending, @members.processing, @members.done, @members.refused, @member, @creator ]
	 * Example: ["@members.auto","@creator","user@gmail.com","..."]
	 */
	public to: string[] = []
	/** Subject of the mail */
	public subject: string = null
	/** Object of the mail */
	public message: string = null
	/** Modify the from name. Default: Yousign */
	public fromName: string = null
	/**
	 * Constructor
	 * @param {IConfigEmailTemplate} data The data used to fill the instance
	 */
	constructor(data: IConfigEmailTemplate = {}) {
		_.extendOwn(this, _.pick(data, "to", "subject", "message", "fromName"))
	}
}
