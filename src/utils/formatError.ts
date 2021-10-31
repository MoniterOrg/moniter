import { IError } from "../interfaces/IError";

export const formatError = (error: IError) => {
  return JSON.stringify(error, undefined, 2);
};
