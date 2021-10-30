![The moniter logo.](https://github.com/MoniterOrg/moniter/blob/master/logo.png)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/MoniterOrg/moniter/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/moniter.svg?style=flat)](https://www.npmjs.com/package/moniter) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) 

## Our Story

First prototyped in Feldkirch, Austria, then built out in full at the <img src="https://digitaleinitiativen.at/wp-content/uploads/2019/11/cropped-di-logo-2-300x206.png" height="21px" width="30px"/> [Umma Hüsla Hackathon "Reboot", October 2021](https://digitaleinitiativen.at/umma-huesla-hackaton/) <img src="https://digitaleinitiativen.at/wp-content/uploads/2019/11/cropped-di-logo-2-300x206.png" height="21px" width="30px"/>

> Want a dashboard, data persistence, logs, support, and more? [Try moniter Enterprise at moniter.org](https://moniter.org) - built upon this very package! 😄

Otherwise, follow the remaining documenation to see how you can use `moniter` at your own organization.

## Get Started

1. Install the `moniter` package in your project:

```bash
npm install --save moniter
```

2. Setup configuration files:

- Copy the entire contents of the folder [`example/src/config/moniter`](https://github.com/MoniterOrg/moniter/tree/master/example/src/config/moniter) to your project and modify all the configuration files:

- `url-config.ts`: the list of URLs that you want to monitor. 
- `alert-config.ts` the list of alert methods you wish to be notified by
- `email-config.ts`, the email settings if you wish to be notified by email
- `slack-config.ts`, the Slack webhook if you wish to be notified by slack

_\*\*\* More contact methods are coming soon! \*\*\*_

**Once these files have been created, ***do not*** check them into git! They potentially contain secrets!**

3. Create a new `.ts` file (in this example named `moniter-config.ts`) and import these configuration files and create a variable that corresponds to the [`IConfigConfig`](https://github.com/MoniterOrg/moniter/tree/master/src/interfaces/IConfigConfig.ts) interface: 

```ts
// src/config/moniter/moniter-config.ts
import { IConfigConfig } from 'moniter';
import urlConfig from './url-config.js';
import alertConfig from './alert-config.js';
import emailConfig from './email-config.js';
import slackConfig from './slack-config.js';

const config: IConfigConfig = {
  urlConfig,
  alertConfig,
  // TODO: add once properly configured for your organization:
  // emailConfig,
  // slackConfig,
};

export default config;
```

***Note that according to IConfigConfig, at least a urlConfig and an alertConfig is required. This example follows the example/ folder and uses only the AlertMethod.CONSOLE alert type.***

4. Import `moniter`, and your newly created config and call `monitor(config)` to start monitoring!

```js
// index.js
import moniter from 'moniter'
import config from './src/config/moniter/monitor-config.js'

moniter(config);
```

**Question**: _Why the use of the `.js` file extension everywhere when these are TypeScript files?_ 

**Answer**: `moniter` is trying to be very cool and uses `esm` to package itself. This requires that write our imports filepaths with their _compiled_ file paths(s), i.e., `.js`. 

TypeScript unfortunately does not consider it a responsibility for their library. [See more here](https://github.com/microsoft/TypeScript/issues/33588)

> Don't want to do all these steps yourself? Try [moniter Enterprise at moniter.org](https://moniter.org) - built on this very package! 😄

## Example: Run With Forever

To have an on premise site uptime checker you can use anywhere, you can run `moniter` by using the tool `forever`:

```bash
forever start index.js
```

This will restart your `index.js` process if `moniter` crashes at any time.

See [forever's repository](https://github.com/foreversd/forever) for more information. 

(We're not sponsored by `forever` in any way, we just think it's a cool tool! 😄)

## Example

See a working example in the [example/](https://github.com/MoniterOrg/moniter/tree/master/example) folder.



