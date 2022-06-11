import fs from 'fs';

export const renameFile = async (command) => {
  const chunkStringified = command.toString().trim();
  const pathTwoVar = chunkStringified.slice(2);
  const twoPathArr =  pathTwoVar.trim().split(' ');
  if (twoPathArr.length === 2) {
    const name = twoPathArr[0]
    const newName = twoPathArr[1]
    fs.promises.rename(name, newName).then(()=>console.log("Rename was successful")).catch((err)  => {
      if(err) {
        if (err.code === 'ENOENT')  console.log('Operation failed')
      }
    })
  } else {
    console.log('Invalid input')
  }
};
