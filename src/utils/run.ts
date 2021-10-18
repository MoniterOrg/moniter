import fetch, { Response } from "node-fetch";
import config from "../config/url-config.js";
import ISiteFetchException from "../interfaces/IErrorSite.js";
import { sendEmail } from "./sendEmail.js";

const fetchUrls = async () => {
  return Promise.all(
    config.urls.map(async (url) => {
      try {
        const response = await fetch(url);
        return response;
      } catch (error) {
        return {
          message: error.code,
          url,
        };
      }
    })
  );
};

const isResponse = (p: any): p is Response => !!p.status;
const isSiteFetchException = (p: any): p is ISiteFetchException => !!p.message;

const filterResponses = (responses: (Response | ISiteFetchException)[]) => {
  return responses
    .filter((response) => {
      return (
        (isResponse(response) && response.status !== 200) ||
        isSiteFetchException(response)
      );
    })
    .map((response) => {
      return isSiteFetchException(response)
        ? {
            url: response.url,
            error: response.message,
          }
        : {
            url: response.url,
            error: response.status.toString(),
          };
    });
};

const run = async () => {
  const responses = await fetchUrls();
  const errors = filterResponses(responses);
  if (errors.length > 0) {
    console.log(JSON.stringify(errors));
    const stringified = JSON.stringify(errors, undefined, 2);
    const title = "Moniter had trouble connecting to the following sites:"
    sendEmail(`${title}\n${stringified}`, `<p>${title}<p><pre>${stringified}</pre>`);
  }
};

export default run;
