import { IConfigConfig } from "../interfaces/config/IConfigConfig.js";
import { fetchUrls } from "./fetchUrls.js";
import { filterResponses } from "./filterResponses.js";
import { sendAlerts } from "./sendAlerts.js";

export const run = async (config: IConfigConfig) => {
  const responses = await fetchUrls(config.urlConfig);
  const errors = filterResponses(responses);
  
  // Send alerts only if there are errors (duh)
  if (errors.length > 0) {
    console.log(JSON.stringify(errors));
    sendAlerts(config, errors);
  }
};
