import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { name } from './greeting.js';
import { makeFileNavigation } from './makeFileNavigation.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = process.stdin;
const write = process.stdout;

const args = process.argv.slice(2);

export const listener = () => {
  read.on('data', (data) => {
    if (data.includes('.exit')) {
      process.stdout.write(`Thank you for using File Manager, ${name}!`);
      process.exit(0);
    } 
    makeFileNavigation(data)
  })
};

