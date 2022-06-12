import { makeList } from './makeList.js';
import { downToDir } from './downToDir.js';
import { readFile } from './fileWorkers/readFile.js';
import { addFile } from './fileWorkers/addFile.js';
import { renameFile } from './fileWorkers/renameFile.js';
import { copyFile } from './fileWorkers/copyFile.js';
import { moveFile } from './fileWorkers/moveFile.js';
import { deleteFile } from './fileWorkers/deleteFile.js';
import { workWithOS } from './OSWorkers/workWithOS.js';
import { makeHash } from './hash/makeHash.js';
import { makeCompress } from './compression/makeCompress.js';
import { showActualLine } from './showActualLine.js';
import { makeDecompress } from './compression/makeDecompress.js';

const trueCommands = new Set (['up', "cd", "ls", "cat", "add", "rn", "cp", "mv", "rm", "os", "hash", "compress", "decompress"])

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
      showActualLine();
      break;
      case "ls":  makeList(url);
      showActualLine();
      break;
      case "cd": downToDir(chunkStringified);
      showActualLine();
      break;
      case "cat": readFile(chunkStringified);
      showActualLine();
      break;
      case "add": addFile(chunkStringified);
      showActualLine();
      break;
      case "rn": renameFile(chunkStringified);
      showActualLine();
      break;
      case "cp": copyFile(chunkStringified);
      showActualLine();
      break;
      case "mv": moveFile(chunkStringified);
      showActualLine();
      break;
      case "rm": deleteFile(chunkStringified);
      showActualLine();
      break;
      case "os": workWithOS(chunkStringified);
      showActualLine();
      break;
      case "hash": makeHash(chunkStringified);
      showActualLine();
      break;
      case "compress": makeCompress(chunkStringified);
      showActualLine();
      break;
      case "decompress": makeDecompress(chunkStringified);
      showActualLine();
      break;
      default: console.log("Invalid input\n");
      break;
    }
  } else {
    process.stdout.write("Invalid input\n");
  }

};

