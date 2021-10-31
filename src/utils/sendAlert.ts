import { IError } from '../interfaces/IError';
import { sendEmailAlert } from './alerts/sendEmailAlert.js';
import { sendSlackMessage } from './alerts/sendSlackAlert.js';
import { IConfigConfig } from '../interfaces/config/IConfigConfig';
import { AlertMethod } from '../enums/AlertMethod';
import { sendConsoleAlert } from './alerts/sendConsoleAlert';

export const sendAlert = async (config: IConfigConfig, error: IError) => {
  await Promise.all(
    config.alertConfig.alertMethods.map(async (alertMethod) => {
      switch (alertMethod) {
        case AlertMethod.CONSOLE:
          sendConsoleAlert(error);
          return;
        case AlertMethod.EMAIL:
          // TODO: should be moved to a validation step
          if (config.emailConfig) {
            sendEmailAlert(config.emailConfig, error);
          }
          return;
        case AlertMethod.SLACK:
          if (config.slackConfig) {
            await sendSlackMessage(config.slackConfig, error);
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
    }),
  );
};
