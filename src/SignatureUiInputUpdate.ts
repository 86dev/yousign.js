import { ISignatureUIInputUpdate } from "./interface/ISignatureUIInputUpdate"
import { RedirectConfig } from "./RedirectConfig"
import _ from "./Tools"

export class SignatureUiInputUpdate implements ISignatureUIInputUpdate {
	/** Signature UI’s name */
	public name: string = null
	/** Signature UI’s description */
	public description: string = null
	/**
	 * Toggle header bar of the app view.
	 * @default true
	 */
	public enableHeaderBar: boolean = true
	/**
	 * Toggle “Sign as” band on the top of the app view.
	 * @default true
	 */
	public enableHeaderBarSignAs: boolean = true
	/**
	 * Toggle sidebar of the app view.
	 * @default true
	 */
	public enableSidebar: boolean = true
	/**
	 * Toggle list of members in the procedure.
	 * @default true
	 */
	public enableMemberList: boolean = true
	/**
	 * Toggle list of documents in the procedure.
	 * @default true
	 */
	public enableDocumentList: boolean = true
	/**
	 * Toggle downloads buttons for documents.
	 * @default true
	 */
	public enableDocumentDownload: boolean = true
	/**
	 * Toggle activity feed.
	 * @default true
	 */
	public enableActivities: boolean = true
	/**
	 * True for use a popup to enter the SMS code, false for use a fullscreen view.
	 * @default false
	 */
	public authenticationPopup: boolean = false
	/**
	 * Default value for zoom of the PDF viewer. Default value is the adapted to the resolution of your screen. Minimum: 1. Maximum: 500.
	 * @default 100
	 */
	public defaultZoom: number = 100
	/** Base64 of your logo. Example: data:image/png;base64,iVBORw[...] */
	public logo: string = null
	/**
	 * Allow sign images types available for signature. The first type of the list will be selected as default for the signer.
	 * @enum [ name, draw, custom ].
	 * @default All types is allowed by default.
	 */
	public signImageTypesAvailable: string[] = ["name", "draw", "custom"]
	/** Default selected language of the interface. Must be present in “languages” field. */
	public defaultLanguage: string = null
	/** Array of allowed languages, use country code */
	public languages: string[] = []
	/** List of fonts to load on the view. (Loaded via Google fonts) */
	public fonts: string[] = []
	/** CSS for customize the view */
	public style: string = null
	/** Cancel redirection configuration */
	public redirectCancel: RedirectConfig = new RedirectConfig()
	/** Error redirection configuration */
	public redirectError: RedirectConfig = new RedirectConfig()
	/** Success redirection configuration */
	public redirectSuccess: RedirectConfig = new RedirectConfig()
	/**
	 * Constructor
	 * @param {ISignatureUIInputUpdate} data The data used to fill the instance
	 */
	constructor(data: ISignatureUIInputUpdate = {}) {
		_.extendOwn(this, _.pick(data, "name", "description", "enableHeaderBar", "enableHeaderBarSignAs", "enableSidebar", "enableMemberList", "enableDocumentList", "enableDocumentDownload", "enableActivities", "authenticationPopup", "defaultZoom", "logo", "signImageTypesAvailable", "defaultLanguage", "languages", "fonts", "style"))

		if (data.redirectCancel) {
			this.redirectCancel = data.redirectCancel instanceof RedirectConfig ? data.redirectCancel : new RedirectConfig(data.redirectCancel)
		}
		if (data.redirectError) {
			this.redirectError = data.redirectError instanceof RedirectConfig ? data.redirectError : new RedirectConfig(data.redirectError)
		}
		if (data.redirectSuccess) {
			this.redirectSuccess = data.redirectSuccess instanceof RedirectConfig ? data.redirectSuccess : new RedirectConfig(data.redirectSuccess)
		}
	}
}
