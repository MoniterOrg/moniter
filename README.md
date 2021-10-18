![The moniter logo.](./logo.png)

Built by <img src="http://wordpress.inclub-app.com/wp-content/uploads//2021/07/Logo_InClub-2-1.svg" height="20px" width="20px"/> [InClub](https://inclub-app.com).

## Get Started

Clone this repo:

```
git clone <TODO>
```

Configure:

1. Rename `src/url-config.example.json` to `src/url-config.json`, and modify the list of URLs that you want to monitor.

2. Likewise, rename `src/email-config.example.json` to `src/email-config.json`, and include your SMTP credentials.

**Once these files have been created, do not check them into git! They potentially contain secrets!**

Install packages:

```bash
npm install
```

Start in dev mode (run immediately):

```bash
npm run dev
```

Start in staging mode (run every minute):

```bash
npm run stage
```

Start in production mode (run every minute):

```bash
npm run prod
```

To run in the background `forever` is recommended:

```bash
npm install -g forever
```

```bash
forever start build/index.js
```

## TODO

- Regex for variety of URL strings
- SQLite for persistance
- Expose simple dashboard in the browser
