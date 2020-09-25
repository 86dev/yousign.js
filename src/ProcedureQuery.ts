import { TProcedureStatus } from "./interface/IProcedure"
import { ProcedureQueryDate } from "./ProcedureQueryDate"

export class ProcedureQuery {
	/**
	 * Return Procedure list based on the status for each Procedure.
	 * @enum active, finished, expired, refused, draft
	 */
	public status?: TProcedureStatus
	/**
	 * Used to get Procedure template list
	 * @default false
	 */
	public template: boolean = false
	/** Filter by name (contains) */
	public name?: string
	/** Filter by member firstname (contains) */
	public "members.firstname"?: string
	/** Filter by member lastname (contains) */
	public "members.lastname"?: string
	/** Filter by member phone (contains) */
	public "members.phone"?: string
	/** Filter by member email (contains) */
	public "members.email"?: string
	/** Filter by file name (contains) */
	public "files.name"?: string
	/** Filter by creation date */
	public createdAt?: ProcedureQueryDate
	/** Filter by update date */
	public updatedAt?: ProcedureQueryDate
	/** Filter by expire date */
	public expiresAt?: ProcedureQueryDate
	/** Filter by delete date */
	public deletedAt?: ProcedureQueryDate
	/**
	 * Order by attribut.
	 * @enum asc, desc
	 * @exemple { name: 'asc' }
	 */
	public order?: any
	/** Get Procedure list for given members (paraph mode) */
	public members?: string[]
	/** Number of items per page for the pagination */
	public itemsPerPage: number
	/** Disable the pagination */
	public pagination: boolean
	/** Page of the pagination */
	public page: number
}
