import { IConfigConfig } from 'moniter';
import urlConfig from './url-config.js';
import alertConfig from './alert-config.js';
import emailConfig from './email-config.js';
import slackConfig from './slack-config.js';

const config: IConfigConfig = {
  urlConfig,
  alertConfig,
  // TODO: add once properly configured for your organization:
  // emailConfig,
  // slackConfig,
};

export default config;
