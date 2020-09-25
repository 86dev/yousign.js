import { SignatureUiLabelInputIncluded } from "../SignatureUiLabelInputIncluded"
import { ISignatureUIInputUpdate } from "./ISignatureUIInputUpdate"

export interface ISignatureUIInput extends ISignatureUIInputUpdate {
	/** Labels definitions */
	labels?: SignatureUiLabelInputIncluded[]
}
