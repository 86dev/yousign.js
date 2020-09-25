import { ISignatureUILabelInput } from "./ISignatureUILabelInput"

export const SignatureUiLabels = [
	"header-bar-title",
	"button-next-document",
	"button-sign",
	"button-sign-confirm",
	"button-refuse",
	"button-refuse-cancel",
	"button-refuse-confirm",
	"button-validate",
	"button-validate-cancel",
	"button-validate-confirm",
	"alert-refused",
	"alert-finished",
	"alert-signed",
	"alert-informations",
]

export interface ISignatureUILabel extends ISignatureUILabelInput {
	/** Resource’s ID */
	id?: string
	/** Creator’s ID */
	creator?: string
	/** Date of creation */
	createdAt?: string
	/** Date of last update */
	updatedAt?: string
}
