import { greeting } from './comands/greeting.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { listener } from './comands/listener.js';
import { name } from './comands/greeting.js';
import getHomeDirectory from './comands/getHomeDirectory.js';

import fs from 'fs'

import os from  "os";

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