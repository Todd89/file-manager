import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToRead = `${__dirname}/files/fileToRead.txt`;
export const read = async () => {
   const readableStream = fs.createReadStream(fileToRead);
   readableStream.on('data', (chank)=> {
    process.stdout.write(chank)
   })
};

read()