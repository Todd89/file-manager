import { greeting } from './commands/greeting.js';
import { listener } from './commands/listener.js';
import { name } from './commands/greeting.js';
import getHomeDirectory from './commands/getHomeDirectory.js';


export const startFileManager = async () => {
  greeting();
  listener();
  getHomeDirectory();
  process.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${name}!`);
        process.exit(0);
  });
}

startFileManager();