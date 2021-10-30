import { IError } from "../interfaces/IError";

export const formatErrors = (errors: Array<IError>) => {
  return JSON.stringify(errors, undefined, 2);
};
