import { ICheckDocumentBankAccountsInput } from "./ICheckDocumentBankAccountsInput"

export const CheckDocumentBankAccountsTypes = ["RIB"]

export type TCheckDocumentBankAccountsTypes = "RIB"

export interface ICheckDocumentBankAccounts extends ICheckDocumentBankAccountsInput {
	/** Id of the object */
	id?: string
	/** Created date of the object */
	createdAt?: string
	/** Updated date of the object */
	updatedAt?: string
	/**
	 * Type of document.
	 * @see CheckDocumentBankAccountsTypes
	 * @enum [ RIB ]
	 */
	documentType?: TCheckDocumentBankAccountsTypes
	/** Company creator of the object */
	company?: string
	/** Creator of the object */
	creator?: string
	/** Extracted iban on the document */
	extractedIban?: string
	/** Defines if one firstname sent in the input is valid */
	firstNameValid?: boolean
	/** Defines if birth name sent in the input is valid */
	birthNameValid?: boolean
	/** Defines if lastname sent in the input is valid */
	lastNameValid?: boolean
	/** Defines if company name sent in the input is valid */
	companyNameValid?: boolean
	/** Defines if iban sent in the input is valid */
	ibanValid?: boolean
}
