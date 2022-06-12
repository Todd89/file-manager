import crypto from 'crypto';
import { readFileSync } from 'fs';

export const makeHash = async (command) => {
  const chunkStringified = command.toString().trim();
  const pathTwoVar = chunkStringified.slice(4);
  let fileArr =  pathTwoVar.trim().split(' ');
  if (fileArr.length === 1) {
    const file = fileArr[0].split('')[1] === ":" ? `${fileArr}` : `${process.cwd()}/${fileArr}`;
    const fileForRead = readFileSync(file)
    const hash = crypto.createHash('sha256').update(fileForRead).digest('hex');
    console.log(hash)
  } else {
    console.log('Invalid input')
  }

};
