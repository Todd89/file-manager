import fs from 'fs';

export const moveFile = async (command) => {
  const chunkStringified = command.toString().trim();
  const pathTwoVar = chunkStringified.slice(2);
  const twoPathArr =  pathTwoVar.trim().split(' ');

  if (twoPathArr.length === 2) {
    const file = twoPathArr[0];
    let new_path = twoPathArr[1];
    console.log(new_path.split('')[1])
    new_path = new_path.split('')[1] === ":" ? `${twoPathArr[1]}/${file}` : `${process.cwd()}/${new_path}/${file}`;
    console.log(new_path)
    console.log(file)
   
    fs.promises.copyFile(`${process.cwd()}/${file}`,`${new_path}`).then(()=> {
       fs.promises.unlink(`${process.cwd()}/${file}`).then(() => console.log("Move was successful")).catch((err) => {
        if(err && err.code === 'ENOENT') {
          console.log('Operation failed')
        }
      })
    }).catch((err)  => {
      if(err) {
        if (err.code === 'ENOENT')  console.log('Operation failed')
      }
    })
  } else {
    console.log('Invalid input')
  }
};
