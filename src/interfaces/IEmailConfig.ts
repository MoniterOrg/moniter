export default interface IEmailConfig {
    host: string;
    port: number;
    email: string;
    password: string;
    fromName: string;
    from: string;
    to: string;
    subject: string;
}