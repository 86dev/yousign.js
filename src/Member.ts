import axios, { AxiosResponse } from "axios"
import * as $ from "jquery"
import { FileObject } from "./FileObject"
import { IMember, TMemberStatus } from "./interface/IMember"
import { TMemberTypes } from "./interface/IMemberInput"
import { MemberInput } from "./MemberInput"
import { MemberQuery } from "./MemberQuery"
import _ from "./Tools"

export class Member implements IMember {
	/**
	 * Indicates if this member is editable
	 */
	get editable() {
		return ["pending", null].indexOf(this.status) > -1
	}
	/**
	 * List all members
	 * @param {MemberQuery} params Query parameters
	 * @return {Promise<AxiosResponse<Member[]>>}
	 */
	public static list(params: MemberQuery): Promise<AxiosResponse<Member[]>> {
		if (!params.procedure) { throw new Error("You must define a procedure to list members") }
		return axios.get(this.path + "?" + $.param(params)).then((response) => {
			response.data.forEach((item, index, array) => {
				array[index] = new this(item)
			})
			return response
		})
	}
	/** Base API URL */
	protected static path: string = "/members"
	/** Id of the object */
	public id: string = null
	/** ID of the user in your companies. Informations about the member will be duplicate (first name, last name, email and phone number). Required if none of fields above are specified. */
	public user: string = null
	/**
	 * Type of a member. “signer” to sign documents (legally) and “validator” to validate documents.
	 * @see MemberTypes
	 * @enum {string} signer, validator.
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
	/** Creation date */
	public createdAt: string = null
	/** Update date */
	public updatedAt: string = null
	/**
	 * Status
	 * @see MemberStatus
	 * @enum {string} [ pending, processing, done, refused ]
	 */
	public status: TMemberStatus = null
	/** List of file this member has to sign or validate  */
	public fileObjects: FileObject[] = []
	/** Comment of a member when he refuses a signature */
	public comment: string = null
	/** Procedure id reference */
	public procedure: string = null
	/** Base API URL */
	protected readonly path: string = "/members"

	/**
	 * Constructor
	 * @param {IMember} data The data used to fill the instance
	 */
	constructor(data: IMember = {}) {
		this.fill(data)
	}
	/**
	 * Get member full name
	 * @return {string}
	 */
	public fullname(): string {
		return (this.firstname + " " + this.lastname.toUpperCase()).trim()
	}
	/**
	 * Fill the object
	 * @param {IMember} data The data used to fill the instance
	 */
	public fill(data: IMember) {
		if (_.isEmpty(data)) { return }

		_.extendOwn(this, _.pick(data, "id", "user", "type", "firstname", "lastname", "email", "phone", "position", "procedure", "comment", "status", "createdAt", "updatedAt"))

		if (data.fileObjects && _.isArray(data.fileObjects)) {
			data.fileObjects.forEach((item) => {
				const fo = item instanceof FileObject ? item : new FileObject(item)
				if (!fo.member) { fo.member = this.id }
				this.fileObjects.push(fo)
			})
		}
	}
	/**
	 * Create this Member
	 * @return Promise<Member>
	 */
	public post(): Promise<Member> {
		const data = new MemberInput(this)
		return axios.post(this.path, data).then((response) => {
			this.fill(response.data)
			return this
		})
	}
	/**
	 * Update this user
	 * @param {MemberInput} data
	 * @return Promise<Member>
	 */
	public put(data: MemberInput = null): Promise<Member> {
		if (data === null) { data = new MemberInput(this) }
		return axios.put(this.id, data).then((response) => {
			this.fill(response.data)
			return this
		})
	}
	/**
	 * Delete this object
	 * @return Promise<AxiosResponse<any>>
	 */
	public delete(): Promise<AxiosResponse<any>> {
		// @ts-ignore TS2585: 'Promise' only refers to a type, but is being used as a value here. Do you need to change your target library? Try changing the `lib` compiler option to es2015 or later.
		return this.id ? axios.delete(this.id) : new Promise((resolve, reject) => resolve({ data: true, status: 204 }))
	}
	/**
	 * Get a proof file of a member
	 * @return Promise<string> base64 content of the txt file
	 */
	public proof(): Promise<string> {
		return axios.get(this.id + "/proof").then((response) => response.data)
	}
}
