![The moniter logo.](./logo.png)

Made at the <img src="https://digitaleinitiativen.at/wp-content/uploads/2019/11/cropped-di-logo-2-300x206.png" height="21px" width="30px"/> [Umma Hüsla Hackathon](https://digitaleinitiativen.at/umma-huesla-hackaton/).

## Get Started

Clone this repo:

```
git clone https://github.com/MoniterOrg/moniter.git
```

Configure:

1. Rename `src/url-config.example.json` to `src/url-config.json`, and modify the list of URLs that you want to monitor.

2. Likewise, rename `src/email-config.example.json` to `src/email-config.json`, and include your SMTP credentials.

**Once these files have been created, do not check them into git! They potentially contain secrets!**

Install packages:

```bash
npm install
```

Run in develop mode (run immediately, no cron interval):

```bash
npm run dev
```

Run in staging mode (run every minute, simulates what production does):

```bash
npm run stage
```

To run in the background `forever` is recommended:

```bash
npm install -g forever
```

Then build the app for production:

```bash
npm run build-production
```

And run it with `forever`:

```bash
forever start build/index.js
```

## TODO

- Regex for variety of URL strings
- SQLite for persistance
- Expose simple dashboard in the browser
