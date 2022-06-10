import fs from 'fs';

import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const file = `${__dirname}/files/fileToRead.txt`;

export const read = async () => {
    await fs.promises.readFile(file, 'utf8').then((res)=>{
      console.log(res)
    }).catch(err => {
      if(err) throw new Error('FS operation failed') 
    })
};

read()