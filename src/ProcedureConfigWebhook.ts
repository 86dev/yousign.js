import { ConfigWebhookTemplate } from "./ConfigWebhookTemplate"
import { IProcedureConfigWebhook } from "./interface/IProcedureConfigWebhook"
import _ from "./Tools"

export class ProcedureConfigWebhook implements IProcedureConfigWebhook {
	/** Webhook executed when signature starts */
	public "procedure.started": ConfigWebhookTemplate[] = []
	/** Webhook executed when the signature has ended */
	public "procedure.finished": ConfigWebhookTemplate[] = []
	/** Webhook executed when a a signature is refused */
	public "procedure.refused": ConfigWebhookTemplate[] = []
	/** Webhook executed when the procdure has expired */
	public "procedure.expired": ConfigWebhookTemplate[] = []
	/** Webhook executed when the procedure is deleted */
	public "procedure.deleted": ConfigWebhookTemplate[] = []
	/** Webhook executed when a member can start signing */
	public "member.started": ConfigWebhookTemplate[] = []
	/** Webhook executed when a member has finished (either signed or refused) */
	public "member.finished": ConfigWebhookTemplate[] = []
	/** Webhook executed when a comment has been created (when a user refused) */
	public "comment.created": ConfigWebhookTemplate[] = []
	/**
	 * Constructor
	 * @param {object} data The data used to fill the instance
	 */
	constructor(data: IProcedureConfigWebhook = {}) {
		// @ts-ignore TS2345: Argument of type 'String | UserGroupData' is not assignable to parameter of type 'UserGroupData'. Type 'String' has no properties in common with type 'UserGroupData'.
		_.each(data, (value, key) => {
			if (this.hasOwnProperty(key) && _.isArray(value)) {
				value.forEach((item) => {
					this[key].push(item instanceof ConfigWebhookTemplate ? item : new ConfigWebhookTemplate(item))
				})
			}
		})
	}
}
