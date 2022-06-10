import fs, { lstat } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { name } from './greeting.js';
import { makeList } from './makeList.js';
import { downToDir } from './downToDir.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = process.stdin;
const write = process.stdout;

const trueCommands = new Set (['up', "cd", "ls"])

export const makeFileNavigation = (command) => {
  const chunkStringified = command.toString().trim();

  const upDirIndex = process.cwd().lastIndexOf("\\");
  const upDir = process.cwd().slice(0, upDirIndex);


  const commandOperator = chunkStringified.slice(0,2);

  const url = process.cwd();

  if(trueCommands.has(commandOperator)) {
    switch (commandOperator) {
      case "up": process.chdir(`${upDir}/`);
      process.stdout.write(`You are currently in path_to_working_directory: ${process.cwd()}\n`);
      break;
      case "ls":  makeList(url);
      break;
      case "cd": downToDir(chunkStringified);
      process.stdout.write(`You are currently in path_to_working_directory: ${process.cwd()}\n`);
      break;
      default: console.log("Invalid input\n");
      break;
    }
  } else {
    process.stdout.write("Invalid input\n");
  }

};

