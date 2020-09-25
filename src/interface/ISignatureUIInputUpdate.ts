import { ISignatureUILabel } from "./ISignatureUILabel"
import { IRedirectConfig } from "./IRedirectConfig"

export interface ISignatureUIInputUpdate {
	/** Signature UI’s name */
	name?: string
	/** Signature UI’s description */
	description?: string
	/**
	 * Toggle header bar of the app view.
	 * @default true
	 */
	enableHeaderBar?: boolean
	/**
	 * Toggle “Sign as” band on the top of the app view.
	 * @default true
	 */
	enableHeaderBarSignAs?: boolean
	/**
	 * Toggle sidebar of the app view.
	 * @default true
	 */
	enableSidebar?: boolean
	/**
	 * Toggle list of members in the procedure.
	 * @default true
	 */
	enableMemberList?: boolean
	/**
	 * Toggle list of documents in the procedure.
	 * @default true
	 */
	enableDocumentList?: boolean
	/**
	 * Toggle downloads buttons for documents.
	 * @default true
	 */
	enableDocumentDownload?: boolean
	/**
	 * Toggle activity feed.
	 * @default true
	 */
	enableActivities?: boolean
	/**
	 * True for use a popup to enter the SMS code, false for use a fullscreen view.
	 * @default false
	 */
	authenticationPopup?: boolean
	/**
	 * Default value for zoom of the PDF viewer. Default value is the adapted to the resolution of your screen. Minimum: 1. Maximum: 500.
	 * @default 100
	 */
	defaultZoom?: number
	/** Base64 of your logo. Example: data:image/png;base64,iVBORw[...] */
	logo?: string
	/**
	 * Allow sign images types available for signature. The first type of the list will be selected as default for the signer.
	 * @enum [ name, draw, custom ].
	 * @default All types is allowed by default.
	 */
	signImageTypesAvailable?: string[]
	/** Default selected language of the interface. Must be present in “languages” field. */
	defaultLanguage?: string
	/** Array of allowed languages, use country code */
	languages?: string[]
	/** Labels definitions */
	labels?: ISignatureUILabel[]
	/** List of fonts to load on the view. (Loaded via Google fonts) */
	fonts?: string[]
	/** CSS for customize the view */
	style?: string
	/** Cancel redirection configuration */
	redirectCancel?: IRedirectConfig
	/** Error redirection configuration */
	redirectError?: IRedirectConfig
	/** Success redirection configuration */
	redirectSuccess?: IRedirectConfig
}
