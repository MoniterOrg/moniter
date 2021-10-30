import {IAlertConfig} from "./IAlertConfig";
import {IEmailConfig} from "./IEmailConfig";
import {ISlackConfig} from "./ISlackConfig";
import {IUrlConfig} from "./IUrlConfig";

export interface IConfigConfig {
    urlConfig: IUrlConfig;
    alertConfig: IAlertConfig;
    emailConfig?: IEmailConfig;
    slackConfig?: ISlackConfig;
}