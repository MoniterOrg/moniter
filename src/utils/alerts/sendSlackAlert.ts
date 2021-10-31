import fetch from "node-fetch";
import Constants from "../../constants/Constants.js";
import {IError} from "../../interfaces/IError";
import {ISlackConfig} from "../../interfaces/config/ISlackConfig";
import { formatError } from "../formatError.js";

export const sendSlackMessage = async (config: ISlackConfig, error: IError): Promise<void>  => {
    const formattedErrors = formatError(error)
    const message = `${Constants.DEFAULT_TITLE}\n\n\`\`\`${formattedErrors}\`\`\``
    await fetch(config.webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text: message,
        }),
    })
}
