import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const dir = `${process.cwd()}`
export const list = async () => {
  let items_arr = [];

  await fs.promises.readdir(dir).then((items) => {
    for (let i = 0; i < items.length; i++) {
      items_arr = [...items_arr, items[i] ]
    }
    console.log(items_arr)
  }).catch(err => {
    if(err) {
      throw new Error('FS operation failed')
    }
  })
};

list ()