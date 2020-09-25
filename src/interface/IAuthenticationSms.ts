import { IAuthentication } from "./IAuthentication"

export const AuthenticationSmsStatus = ["active", "expired", "used", "reached"]

export type TAuthenticationSmsStatus = "active" | "expired" | "used" | "reached"

export interface IAuthenticationSms extends IAuthentication {
	/**
	 * Status of authentication.
	 * @see AuthenticationSmsStatus
	 * @enum [ active, expired, used, reached ]
	 */
	status?: TAuthenticationSmsStatus
}
