import { IServerStampInput } from "./IServerStampInput"

export const ServerStampStatus = ["pending", "processing", "done"]

export type TServerStampStatus = "pending" | "processing" | "done"

export interface IServerStamp extends IServerStampInput {
	/** Resource server stamp uri */
	id?: string
	/** Creation date */
	createdAt?: string
	/** Update date */
	updatedAt?: string
	/** Finish date */
	finishedAt?: string
	/**
	 * Status
	 * @enum [ pending, processing, done ]
	 */
	status?: TServerStampStatus
	/** Resource company uri */
	company?: string
}
