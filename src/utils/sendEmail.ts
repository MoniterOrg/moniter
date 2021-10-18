import nodemailer from "nodemailer";
import config from "../config/email-config.js";

export const sendEmail = async (text: string, html: string) => {
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
