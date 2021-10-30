import fetch from "node-fetch";
import {IUrlConfig} from "../interfaces/config/IUrlConfig";

export const fetchUrls = async (config: IUrlConfig) => {
  return Promise.all(
    config.urls.map(async (url) => {
      try {
        const response = await fetch(url);
        return response;
      } catch (error) {
        return {
          url,
          message: error.code
        };
      }
    })
  );
};
