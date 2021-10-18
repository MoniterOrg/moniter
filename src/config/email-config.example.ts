import IEmailConfig from "../interfaces/IEmailConfig";

const config: IEmailConfig = {
    host: 'email.host.com',
    port: 465,
    email: 'myawesome@email.com',
    password: '123456',
    from: 'myawesome@email.com',
    fromName: 'My Awesome Email',
    to: 'someotherawesomeemail@email.com',
    subject: 'Moniter Discovered Site Issue'
}

export default config;