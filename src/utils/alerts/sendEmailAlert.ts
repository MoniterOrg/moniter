import Constants from "../../constants/Constants.js";
import { IEmailConfig } from "../../interfaces/config/IEmailConfig.js";
import { IError } from "../../interfaces/IError.js";
import { formatErrors } from "../formatErrors.js";
import nodemailer from 'nodemailer'

export const sendEmailAlert = async (
  config: IEmailConfig,
  errors: Array<IError>
) => {
  const title = Constants.DEFAULT_TITLE;
  const formattedErrors = formatErrors(errors);
  const text = `${title}\n${formattedErrors}`;
  const html = `<p>${title}</p><pre>${formattedErrors}</pre>`;

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.email,
      pass: config.password,
    },
  });

  await transporter.sendMail({
    from: `"${config.fromName}" <${config.from}>`,
    to: config.to,
    subject: config.subject,
    text,
    html,
  });
};
