import { IAuthentication } from "./IAuthentication"

export const AuthenticationInweboStatus = ["waiting", "refused", "timeout", "ok"]

export type TAuthenticationInweboStatus = "waiting" | "refused" | "timeout" | "ok"

export interface IAuthenticationInwebo extends IAuthentication {
	/**
	 * Status of authentication.
	 * @see AuthenticationInweboStatus
	 * @enum [ waiting, refused, timeout, ok ]
	 */
	status?: TAuthenticationInweboStatus
}
