import { IConfigConfig } from 'moniter';
import urlConfig from './url-config.js';
import emailConfig from './email-config.js';
import slackConfig from './slack-config.js';
import alertConfig from './alert-config.js';

const config: IConfigConfig = {
  urlConfig,
  emailConfig,
  slackConfig,
  alertConfig,
};

export default config;
