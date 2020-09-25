import { ICheckDocumentIdentitiesInput } from "./ICheckDocumentIdentitiesInput"

export const CheckDocumentIdentitiesTypes = ["ID_CARD", "PASSPORT"]

export type TCheckDocumentIdentitiesTypes = "ID_CARD" | "PASSPORT"

export interface ICheckDocumentIdentities extends ICheckDocumentIdentitiesInput {
	/** Id of the object */
	id?: string
	/** Created date of the object */
	createdAt?: string
	/** Updated date of the object */
	updatedAt?: string
	/** Company creator of the object */
	company?: string
	/** Creator of the object */
	creator?: string
	/**
	 * Type of document.
	 * @see CheckDocumentIdentitiesTypes
	 * @enum [ ID_CARD, PASSPORT ]
	 */
	documentType?: TCheckDocumentIdentitiesTypes
	/** Extracted firstnames on the document */
	extractedFirstNames?: string[]
	/** Extracted birth name on the document */
	extractedBirthName?: string
	/** Extracted birth date on the document */
	extractedBirthDate?: string
	/** Extracted gender on the document */
	extractedGender?: string
	/** Extracted issuance date on the document */
	extractedIssuanceDate?: string
	/** Extracted expiration date on the document */
	extractedExpirationDate?: string
	/** Extracted MRZ on the document */
	extractedMrz?: string[]
	/** Defines if one firstname sent in the input is valid */
	firstNameValid?: boolean
	/** Defines if birth name sent in the input is valid */
	birthNameValid?: boolean
	/** Defines if MRZ sent in the input is valid */
	mrzValid?: boolean
	/** Defines if the document is expired */
	expired?: boolean
	/** Defines if the document is valid */
	valid?: boolean
}
