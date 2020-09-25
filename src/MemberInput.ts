import { FileObjectInput } from "./FileObjectInput"
import { IMemberInput, TMemberTypes } from "./interface/IMemberInput"
import _ from "./Tools"

export class MemberInput implements IMemberInput {
	/** ID of the user in your companies. Informations about the member will be duplicate (first name, last name, email and phone number). Required if none of fields above are specified. */
	public user: string = null
	/**
	 * Type of a member. “signer” to sign documents (legally) and “validator” to validate documents.
	 * @see MemberTypes
	 * @enum [ signer, validator ].
	 * @default signer
	 */
	public type: TMemberTypes = "signer"
	/** Firstname of an external member. Required if user field is blank */
	public firstname: string = null
	/** Lastname of an external member. Required if user field is blank */
	public lastname: string = null
	/** Email of an external member. Required if user field is blank */
	public email: string = null
	/** Phone of an external member. Required if user field is blank */
	public phone: string = null
	/** If the procedure have the boolean “ordered” at true, you can define position of the order to invite your members to sign. When the first member have signed, the second will be invited, etc … Only the first member will be invited to sign. */
	public position: number = null
	/** List of file this member has to sign or validate  */
	public fileObjects: FileObjectInput[] = []
	/** Procedure id reference */
	public procedure: string = null
	/**
	 * Constructor
	 * @param {IMemberInput} data The data used to fill the instance
	 */
	constructor(data: IMemberInput = {}) {
		_.extendOwn(this, _.pick(data, "user", "type", "firstname", "lastname", "email", "phone", "position", "procedure"))

		if (data.fileObjects && _.isArray(data.fileObjects)) {
			data.fileObjects.forEach((item) => {
				if (!item.fieldName && (!item.page || !item.position)) { return }

				this.fileObjects.push(item instanceof FileObjectInput ? item : new FileObjectInput(item))
			})
		}
	}
}
