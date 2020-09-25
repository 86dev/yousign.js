import { IYousignConfig } from "./interface/IYousignConfig"

class Yousign implements IYousignConfig {
	public ApiKey: string = null
	public ApiUrl: string = "https://webapp.yousign.com"

	public constructor(config: IYousignConfig) {

	}
}
