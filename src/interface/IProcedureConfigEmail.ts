import { IConfigEmailTemplate } from "./IConfigEmailTemplate"

export interface IProcedureConfigEmail {
	/** Email sent when signature starts */
	"procedure.started"?: IConfigEmailTemplate[]
	/** Email sent when signatures has ended */
	"procedure.finished"?: IConfigEmailTemplate[]
	/** Email sent when a signature is refused */
	"procedure.refused"?: IConfigEmailTemplate[]
	/** Email sent when the procedure has expired */
	"procedure.expired"?: IConfigEmailTemplate[]
	/** Email sent when the procedure is deleted */
	"procedure.deleted"?: IConfigEmailTemplate[]
	/** Email sent when a member can start signing */
	"member.started"?: IConfigEmailTemplate[]
	/** Email sent when a member has finished (either signed or refused) */
	"member.finished"?: IConfigEmailTemplate[]
	/** Email sent when a comment has been created (when a user refused) */
	"comment.created"?: IConfigEmailTemplate[]
}
