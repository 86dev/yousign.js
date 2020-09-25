export interface IProcedureDuplicateInput {
	/** Defines if the new procedure should be started after the duplication. Default: false */
	start?: boolean
	/** Override the parent value for this property and defines if the new procedure should be a template or not. Default: false */
	template?: boolean
}
