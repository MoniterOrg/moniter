import cron from "node-cron";
import run from "./utils/run.js";
import env from "./env/env.js";

// default behaviour is production environment
switch (env.ENV) {
  case "DEVELOP":
    console.log("DEVELOP: running immediately!");
    run();
    break;
  case "STAGING":
    console.log("STAGING: croning every minute!");
    cron.schedule("* * * * *", run);
    break;
  default:
    cron.schedule("* * * * *", run);
}
