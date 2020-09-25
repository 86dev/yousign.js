import { IMemberInput } from "./IMemberInput"
import { IProcedureConfig } from "./IProcedureConfig"
import { IProcedureDuplicateInput } from "./IProcedureDuplicateInput"

export interface IProcedureInput extends IProcedureDuplicateInput {
	/** Name of procedure */
	name?: string
	/** Description of procedure */
	description?: string
	/** Expiration date. The procedure will be out of usage after this date. */
	expiresAt?: string
	/** Defines an order for the procedure process. If true, position of each member will be used to define the validation workflow. */
	ordered?: boolean
	/** Procedure extra data */
	metadata?: any
	/** Procedure configuration */
	config?: IProcedureConfig
	/** List of members, REQUIRED if start field is true. */
	members?: IMemberInput[]
	/** Defines if related files are available. Used only for company that have this option. */
	relatedFilesEnable?: boolean
	/** Defines if the files of the procedure must be archived (Company should be allowed). Default: false */
	archive?: boolean
}
