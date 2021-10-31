import { Response } from 'node-fetch';
import { IError } from '../interfaces/IError';
import { ISiteFetchException } from '../interfaces/ISiteFetchException';
import { isResponse } from './type-guards/isResponse.js';
import { isSiteFetchException } from './type-guards/isSiteFetchException.js';

export const filterResponses = (
  response: Response | ISiteFetchException,
): IError | null => {
  if (
    (isResponse(response) && response.status !== 200) ||
    isSiteFetchException(response)
  ) {
    return isSiteFetchException(response)
      ? {
          url: response.url,
          error: response.message,
        }
      : {
          url: response.url,
          error: response.status.toString(),
        };
  }
  return null
};
