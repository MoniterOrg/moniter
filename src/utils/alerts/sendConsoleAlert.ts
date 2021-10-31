import { IError } from "../..";

export const sendConsoleAlert = (error: IError) => {
    console.log(JSON.stringify(error));
}