import { IEmailConfig } from 'moniter';

const emailConfig: IEmailConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  email: 'myemail@gmail.com',
  password: '123456',
  from: 'myemail@gmail.com',
  fromName: 'MyEmail',
  to: 'sendTo@email.com',
  subject: 'Moniter Discovered Site Issue',
};

export default emailConfig;
