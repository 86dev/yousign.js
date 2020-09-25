import { IConfigWebhookTemplate } from "./IConfigWebhookTemplate"

export interface IProcedureConfigWebhook {
	/** Webhook executed when signature starts */
	"procedure.started"?: IConfigWebhookTemplate[]
	/** Webhook executed when the signature has ended */
	"procedure.finished"?: IConfigWebhookTemplate[]
	/** Webhook executed when a a signature is refused */
	"procedure.refused"?: IConfigWebhookTemplate[]
	/** Webhook executed when the procdure has expired */
	"procedure.expired"?: IConfigWebhookTemplate[]
	/** Webhook executed when the procedure is deleted */
	"procedure.deleted"?: IConfigWebhookTemplate[]
	/** Webhook executed when a member can start signing */
	"member.started"?: IConfigWebhookTemplate[]
	/** Webhook executed when a member has finished (either signed or refused) */
	"member.finished"?: IConfigWebhookTemplate[]
	/** Webhook executed when a comment has been created (when a user refused) */
	"comment.created"?: IConfigWebhookTemplate[]
}
