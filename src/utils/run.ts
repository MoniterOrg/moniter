import cron from "node-cron";
import { IConfigConfig } from "../interfaces/config/IConfigConfig.js";
import { fetchUrl } from "./fetchUrl.js";
import { filterResponses } from "./filterResponse.js";
import { sendAlert } from "./sendAlert.js";

export const run = async (config: IConfigConfig) => {
  // for each URL, schedule a job to check for errors
  config.urlConfig.urlCrons.map(urlCron => {
    cron.schedule(urlCron.interval, async () => {
      const response = await fetchUrl(urlCron.url);
      const error = filterResponses(response);
      // Send alerts only if there are errors (duh)
      if (error) {
        sendAlert(config, error);
      }
    })
  })
};
