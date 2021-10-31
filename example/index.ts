import moniter, { IConfigConfig, runImmediately, AlertMethod } from 'moniter';
import config from './src/config/moniter/moniter-config.js'

const config: IConfigConfig = {
    urlConfig: {
      urlCrons: [
        {
          url: "https://notasite.dummy",
          interval: "* * * * * *",
        },
      ],
    },
    alertConfig: {
      alertMethods: [AlertMethod.SLACK],
    },
    slackConfig: {
      webhookUrl:
        "https://hooks.slack.com/services/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",
    },
  }

moniter(config);

// alternatively, run immediately for all URLs!
// await runImmediately(config);
