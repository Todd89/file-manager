import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const create = async () => {
   fs.promises.access(`${__dirname}/files/fresh.txt`, fs.constants.F_OK).then(
     () => {
      try {
        throw new Error("FS operation failed");
    } catch (err) {
      console.log(err)
    }
   })
  .catch(() => fs.writeFile(`${__dirname}/files/fresh.txt`, 'I am fresh and young', function (err) {
             if (err) throw new Error('FS operation failed')
       }));
      }
create()