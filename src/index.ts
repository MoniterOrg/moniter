import { IConfigConfig } from './interfaces/config/IConfigConfig.js';
import { run } from './utils/run.js';

const moniter = (config: IConfigConfig) => {
  run(config);
};

export { AlertMethod } from './enums/AlertMethod';
export { IAlertConfig } from './interfaces/config/IAlertConfig';
export { IConfigConfig } from './interfaces/config/IConfigConfig';
export { IEmailConfig } from './interfaces/config/IEmailConfig';
export { ISlackConfig } from './interfaces/config/ISlackConfig';
export { IUrlConfig } from './interfaces/config/IUrlConfig';
export { IUrlCron } from './interfaces/config/IUrlCron';
export { IError } from './interfaces/IError';
export { ISiteFetchException } from './interfaces/ISiteFetchException';
export { runImmediately } from './utils/runImmediately';
export default moniter;
