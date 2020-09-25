import { ISignatureUILabelInputIncluded } from "./interface/ISignatureUILabelInputIncluded"
import _ from "./Tools"

export class SignatureUiLabelInputIncluded implements ISignatureUILabelInputIncluded {
	/** Name of the label. If the name is not used in the view, nothing will appear. */
	public name: string = null
	/** Translation of the label per language */
	public languages: any = null
	/**
	 * Constructor
	 * @param {ISignatureUILabelInputIncluded} data The data used to fill the instance
	 */
	constructor(data: ISignatureUILabelInputIncluded = {}) {
		_.extendOwn(this, _.pick(data, "name", "languages"))
	}
}
