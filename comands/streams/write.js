import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToWrite = `${__dirname}/files/fileToWrite.txt`

export const write = async () => {
    const writableStream = fs.createWriteStream(fileToWrite);
    process.stdin.on('data', data => {
      writableStream.write(data)
    })
};

write()