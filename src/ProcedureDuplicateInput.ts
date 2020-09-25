import { IProcedureDuplicateInput } from "./interface/IProcedureDuplicateInput"
import _ from "./Tools"

export class ProcedureDuplicateInput implements IProcedureDuplicateInput {
	/** Defines if the new procedure should be started after the duplication. Default: false */
	public start: boolean = false
	/** Override the parent value for this property and defines if the new procedure should be a template or not. Default: false */
	public template: boolean = false
	/**
	 * Constructor
	 * @param {IProcedureDuplicateInput} data The data used to fill the instance
	 */
	constructor(data: IProcedureDuplicateInput = {}) {
		_.extendOwn(this, _.pick(data, "start", "template"))
	}
}
