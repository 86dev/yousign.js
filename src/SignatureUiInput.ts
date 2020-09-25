import { ISignatureUIInput } from "./interface/ISignatureUIInput"
import { SignatureUiInputUpdate } from "./SignatureUiInputUpdate"
import { SignatureUiLabelInputIncluded } from "./SignatureUiLabelInputIncluded"
import _ from "./Tools"

export class SignatureUiInput extends SignatureUiInputUpdate implements ISignatureUIInput {
	/** Labels definitions */
	public labels: SignatureUiLabelInputIncluded[] = []
	/**
	 * Constructor
	 * @param {ISignatureUIInput} data The data used to fill the instance
	 */
	constructor(data: ISignatureUIInput = {}) {
		super(data)

		if (data.labels && _.isArray(data.labels)) {
			data.labels.forEach((item) => {
				this.labels.push(item instanceof SignatureUiLabelInputIncluded ? item : new SignatureUiLabelInputIncluded(item))
			})
		}
	}
}
