import  zlib from 'zlib';
import fs from 'fs';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


export const decompress = async () => {
  const gUnZip = zlib.createUnzip();
  const  read = fs.createReadStream(`${__dirname}/files/archive.gz`);
  const  write = fs.createWriteStream(`${__dirname}/files/fileToCompress.txt`);
  read.pipe(gUnZip).pipe(write).on('finish', () => {
      fs.unlink(`${__dirname}/files/archive.gz`, err => {})
  });
  
};

decompress()