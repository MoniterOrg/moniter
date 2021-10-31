import moniter, { runImmediately } from 'moniter';
import config from './src/config/moniter/moniter-config.js'

moniter(config);

// alternatively, run immediately for all URLs!
// runImmediately(config);