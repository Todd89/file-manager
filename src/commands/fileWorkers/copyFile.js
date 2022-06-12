import fs from 'fs';

export const copyFile = async (command) => {
  const chunkStringified = command.toString().trim();
  const pathTwoVar = chunkStringified.slice(2);
  const twoPathArr =  pathTwoVar.trim().split(' ');

  if (twoPathArr.length === 2) {
    const file = twoPathArr[0];
    let new_path = twoPathArr[1];
    new_path = new_path.split('')[1] === ":" ? `${twoPathArr[1]}/copy_${file}` : `${process.cwd()}/${new_path}/copy_${file}`;
    fs.promises.copyFile(`${process.cwd()}/${file}`,`${new_path}`).then(()=>console.log("Copy was successful")).catch((err)  => {
      if(err) {
        if (err.code === 'ENOENT')  console.log('Operation failed')
      }
    })
  } else {
    console.log('Invalid input')
  }
};

