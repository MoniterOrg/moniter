import { IError } from "../..";

export const sendConsoleAlert = (errors: Array<IError>) => {
    console.log(JSON.stringify(errors));
}