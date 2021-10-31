import { IConfigConfig } from '../interfaces/config/IConfigConfig.js';
import { fetchUrl } from './fetchUrl.js';
import { filterResponses } from './filterResponse.js';
import { sendAlert } from './sendAlert.js';

export const runImmediately = async (config: IConfigConfig) => {
  // for each URL, schedule a job to check for errors
  await Promise.all(config.urlConfig.urlCrons.map(async (urlCron) => {
    const response = await fetchUrl(urlCron.url);
    const error = filterResponses(response);
    // Send alerts only if there are errors (duh)
    if (error) {
      await sendAlert(config, error);
    }
  }));
};
