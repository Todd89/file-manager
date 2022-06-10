import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const path = `${__dirname}/files/wrongFilename.txt`;
const new_path = `${__dirname}/files/properFilename.md`;

export const rename = async () => {
  fs.promises.rename( path, new_path).catch((err)  => {
    if(err) {
      if (err.code === 'ENOENT')  throw new Error('FS operation failed')
    }
  })
};

rename();