export const EmailAutoTo = ["@members", "@members.auto", "@members.pending", "@members.processing", "@members.done", "@members.refused", "@member", "@creator"]

export interface IConfigEmailTemplate {
	/**
	 * Reference or email of recipients.
	 * You can given an array of recipients.
	 * A recipient can be a specific email like my-user@email.com or a variable which is available in the list below.
	 * Enum [ @members, @members.auto, @members.pending, @members.processing, @members.done, @members.refused, @member, @creator ]
	 * Example ["@members.auto","@creator","user@gmail.com","..."]
	 */
	to?: string[]
	/** Subject of the mail */
	subject?: string
	/** Object of the mail */
	message?: string
	/** Modify the from name. Default: Yousign */
	fromName?: string
}
