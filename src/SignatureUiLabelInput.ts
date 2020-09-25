import { ISignatureUILabelInput } from "./interface/ISignatureUILabelInput"
import { SignatureUiLabelInputIncluded } from "./SignatureUiLabelInputIncluded"
import _ from "./Tools"

export class SignatureUiLabelInput extends SignatureUiLabelInputIncluded implements ISignatureUILabelInput {
	/** Associated Signature UI’s ID */
	public signatureUi: string = null
	/**
	 * Constructor
	 * @param {ISignatureUILabelInput} data The data used to fill the instance
	 */
	constructor(data: ISignatureUILabelInput = {}) {
		super()
		_.extendOwn(this, _.pick(data, "name", "languages", "signatureUi"))
	}
}
