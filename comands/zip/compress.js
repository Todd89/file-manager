import { fileURLToPath } from 'url';
import { dirname } from 'path';
import  zlib from 'zlib';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const compress = async () => {
  const gzip = zlib.createGzip();
  console.log( __dirname)
  const  read = fs.createReadStream(`${__dirname}/files/fileToCompress.txt`);
  const  write = fs.createWriteStream(`${__dirname}/files/archive.gz`);
  read.pipe(gzip).pipe(write).on('finish', () => {
    fs.unlink(`${__dirname}/files/fileToCompress.txt`, err => {})
  });

};

compress()