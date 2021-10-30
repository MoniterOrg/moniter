import fetch from "node-fetch";
import Constants from "../../constants/Constants.js";
import {IError} from "../../interfaces/IError";
import {ISlackConfig} from "../../interfaces/config/ISlackConfig";
import { formatErrors } from "../formatErrors.js";

export const sendSlackMessage = (config: ISlackConfig, errors: Array<IError>): void  => {
    const formattedErrors = formatErrors(errors)
    const message = `${Constants.DEFAULT_TITLE}\n\n\`\`\`${formattedErrors}\`\`\``
    fetch(config.webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text: message,
        }),
    })
}
