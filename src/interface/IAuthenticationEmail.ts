import { IAuthentication } from "./IAuthentication"

export const AuthenticationEmailStatus = ["active", "expired", "used", "reached"]

export type TAuthenticationEmailStatus = "active" | "expired" | "used" | "reached"

export interface IAuthenticationEmail extends IAuthentication {
	/**
	 * Status of authentication.
	 * @see AuthenticationEmailStatus
	 * @enum [ active, expired, used, reached ]
	 */
	status?: TAuthenticationEmailStatus
}
