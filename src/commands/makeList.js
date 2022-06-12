import fs from 'fs';

export const makeList = async (url) => {
  let items_arr = [];

  await fs.promises.readdir(url).then((items) => {
    for (let i = 0; i < items.length; i++) {
      items_arr = [...items_arr, items[i] ]
    }
    console.log(items_arr);
  }).catch(err => {
    if(err) {
      throw new Error('FS operation failed')
    }
  })
};