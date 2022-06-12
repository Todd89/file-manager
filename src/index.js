import { greeting } from './commands/greeting.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { listener } from './commands/listener.js';
import { name } from './commands/greeting.js';
import getHomeDirectory from './commands/getHomeDirectory.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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