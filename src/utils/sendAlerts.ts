import { IError } from "../interfaces/IError";
import { sendEmailAlert } from "./alerts/sendEmailAlert.js";
import { sendSlackMessage } from "./alerts/sendSlackAlert.js";
import { IConfigConfig } from "../interfaces/config/IConfigConfig";
import { AlertMethod } from "../enums/AlertMethod";

export const sendAlerts = (config: IConfigConfig, errors: Array<IError>) => {
  config.alertConfig.alertMethods.map((alertMethod) => {
    switch (alertMethod) {
      case AlertMethod.EMAIL:
        // TODO: should be moved to a validation step
        if (!config.emailConfig) {
          throw new Error("Please specify a valid email config.");
        }
        sendEmailAlert(config.emailConfig, errors);
        return;
      case AlertMethod.SLACK:
        if (!config.slackConfig) {
          throw new Error("Please specify a valid Slack config.");
        }
        sendSlackMessage(config.slackConfig, errors);
        return;
      // TODO: implement!
      case AlertMethod.SMS:
      case AlertMethod.TELEGRAM:
      case AlertMethod.DISCORD:
      case AlertMethod.TWITTER:
      case AlertMethod.VOICE_CALL:
      case AlertMethod.WEBHOOKS:
      default:
        throw new Error("Alert method not yet implemented.");
    }
  });
};
