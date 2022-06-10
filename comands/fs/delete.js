import fs from 'fs';

import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const path = `${__dirname}/files/fileToRemove.txt`;

export const remove = async () => {
    await fs.promises.unlink(path).catch((err) => {
      if(err && err.code === 'ENOENT') {
        throw new Error('FS operation failed')
      }
    })
};

remove()