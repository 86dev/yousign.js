import { ConfigEmailTemplate } from "./ConfigEmailTemplate"
import { IProcedureConfigEmail } from "./interface/IProcedureConfigEmail"
import _ from "./Tools"

export class ProcedureConfigEmail implements IProcedureConfigEmail {
	/** Email sent when signature starts */
	public "procedure.started": ConfigEmailTemplate[] = []
	/** Email sent when signatures has ended */
	public "procedure.finished": ConfigEmailTemplate[] = []
	/** Email sent when a signature is refused */
	public "procedure.refused": ConfigEmailTemplate[] = []
	/** Email sent when the procedure has expired */
	public "procedure.expired": ConfigEmailTemplate[] = []
	/** Email sent when the procedure is deleted */
	public "procedure.deleted": ConfigEmailTemplate[] = []
	/** Email sent when a member can start signing */
	public "member.started": ConfigEmailTemplate[] = []
	/** Email sent when a member has finished (either signed or refused) */
	public "member.finished": ConfigEmailTemplate[] = []
	/** Email sent when a comment has been created (when a user refused) */
	public "comment.created": ConfigEmailTemplate[] = []
	/**
	 * Constructor
	 * @param {IProcedureConfigEmail} data The data used to fill the instance
	 */
	constructor(data: IProcedureConfigEmail = {}) {
		// @ts-ignore TS2345: Argument of type 'String | UserGroupData' is not assignable to parameter of type 'UserGroupData'. Type 'String' has no properties in common with type 'UserGroupData'.
		_.each(data, (value, key) => {
			if (_.hasProperty(this, key) && _.isArray(value)) {
				value.forEach((item) => {
					this[key].push(item instanceof ConfigEmailTemplate ? item : new ConfigEmailTemplate(item))
				})
			}
		})
	}
}
