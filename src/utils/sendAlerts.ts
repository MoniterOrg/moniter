import { IError } from '../interfaces/IError';
import { sendEmailAlert } from './alerts/sendEmailAlert.js';
import { sendSlackMessage } from './alerts/sendSlackAlert.js';
import { IConfigConfig } from '../interfaces/config/IConfigConfig';
import { AlertMethod } from '../enums/AlertMethod';
import { sendConsoleAlert } from './alerts/sendConsoleAlert';

export const sendAlerts = (config: IConfigConfig, errors: Array<IError>) => {
  config.alertConfig.alertMethods.map((alertMethod) => {
    switch (alertMethod) {
      case AlertMethod.CONSOLE:
        sendConsoleAlert(errors);
        return;
      case AlertMethod.EMAIL:
        // TODO: should be moved to a validation step
        if (config.emailConfig) {
          sendEmailAlert(config.emailConfig, errors);
        }
        return;
      case AlertMethod.SLACK:
        if (config.slackConfig) {
          sendSlackMessage(config.slackConfig, errors);
        }
        return;
      // TODO: implement!
      case AlertMethod.SMS:
      case AlertMethod.TELEGRAM:
      case AlertMethod.DISCORD:
      case AlertMethod.TWITTER:
      case AlertMethod.VOICE_CALL:
      case AlertMethod.WEBHOOKS:
      default:
        throw new Error('Alert method not yet implemented.');
    }
  });
};
