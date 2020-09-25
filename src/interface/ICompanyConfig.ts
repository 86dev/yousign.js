export const AuthenticationModes = ["sms", "inwebo", "email"]

export type TAuthenticationModes = "sms" | "inwebo" | "email"

export interface ICompanyConfig {
	/**
	 * Authentication mode
	 * @enum {string} [ sms, inwebo, email ]
	 */
	authenticationModes?: TAuthenticationModes
}
