import { IUrlConfig } from 'moniter';

const config: IUrlConfig = {
  urlCrons: [
    {url: 'https://facebook.com', interval: "* * * * * *"},
    {url: 'https://google.com', interval: "* * * * * *"},
    {url: 'https://twitter.com', interval: "* * * * * *"},
    {url: 'https://dummy.doesnotexist', interval: "* * * * * *"},
    {url: 'http://www.hackathonsarecool.com', interval: "* * * * * *"},
  ],
};
export default config;
