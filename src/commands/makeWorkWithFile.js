import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { makeList } from './makeList.js';
import { downToDir } from './downToDir.js';
import { readFile } from './fileWorkers/readFile.js';
import { addFile } from './fileWorkers/addFile.js';
import { renameFile } from './fileWorkers/renameFile.js';
import { copyFile } from './fileWorkers/copyFile.js';
import { moveFile } from './fileWorkers/moveFile.js';
import { deleteFile } from './fileWorkers/deleteFile.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = process.stdin;
const write = process.stdout;

const trueCommands = new Set (['up', "cd", "ls", "cat", "add", "rn", "cp", "mv", "rm"])

export const makeWorkWithFile = (command) => {
  const chunkStringified = command.toString().trim();

  const upDirIndex = process.cwd().lastIndexOf("\\");
  const upDir = process.cwd().slice(0, upDirIndex);

  const operatorIndex = chunkStringified.indexOf(' ');
 
  let commandOperator = chunkStringified.slice(0,2);
  if (operatorIndex !== -1) {
    commandOperator = chunkStringified.slice(0,operatorIndex);
  }

  const url = process.cwd();

  if(trueCommands.has(commandOperator)) {
    switch (commandOperator) {
      case "up": process.chdir(`${upDir}/`);
      process.stdout.write(`You are currently in path_to_working_directory: ${process.cwd()}\n`);
      break;
      case "ls":  makeList(url);
      process.stdout.write(`You are currently in path_to_working_directory: ${process.cwd()}\n`);
      break;
      case "cd": downToDir(chunkStringified);
      process.stdout.write(`You are currently in path_to_working_directory: ${process.cwd()}\n`);
      break;
      case "cat": readFile(chunkStringified);
      process.stdout.write(`You are currently in path_to_working_directory: ${process.cwd()}\n`);
      break;
      case "add": addFile(chunkStringified);
      process.stdout.write(`You are currently in path_to_working_directory: ${process.cwd()}\n`);
      break;
      case "rn": renameFile(chunkStringified);
      process.stdout.write(`You are currently in path_to_working_directory: ${process.cwd()}\n`);
      break;
      case "cp": copyFile(chunkStringified);
      process.stdout.write(`You are currently in path_to_working_directory: ${process.cwd()}\n`);
      break;
      case "mv": moveFile(chunkStringified);
      process.stdout.write(`You are currently in path_to_working_directory: ${process.cwd()}\n`);
      break;
      case "rm": deleteFile(chunkStringified);
      process.stdout.write(`You are currently in path_to_working_directory: ${process.cwd()}\n`);
      break;
      default: console.log("Invalid input\n");
      break;
    }
  } else {
    process.stdout.write("Invalid input\n");
  }

};

