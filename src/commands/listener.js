import { name } from './greeting.js';
import { makeWorkWithFile } from './makeWorkWithFile.js';

const read = process.stdin;

export const listener = () => {
  read.on('data', (data) => {
    if (data.includes('.exit')) {
      process.stdout.write(`Thank you for using File Manager, ${name}!`);
      process.exit(0);
    } 
    makeWorkWithFile(data)
  })
};

