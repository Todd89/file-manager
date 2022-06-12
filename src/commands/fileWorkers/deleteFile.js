import fs from 'fs';

export const deleteFile = async (command) => {
  const chunkStringified = command.toString().trim();
  const pathTwoVar = chunkStringified.slice(2);
  let pathArr =  pathTwoVar.trim().split(' ');
  if (pathArr.length === 1) {
    pathArr = pathArr[0].split('')[1] === ":" ? `${pathArr}` : `${process.cwd()}/${pathArr}`;
       fs.promises.unlink(`${pathArr}`).then(() => console.log("Delete was successful")).catch((err) => {
        if(err && err.code === 'ENOENT') {
          console.log('Operation failed')
        }
      })
    } else {
    console.log('Invalid input')
  }
};