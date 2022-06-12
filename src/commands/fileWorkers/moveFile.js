import fs from 'fs';

export const moveFile = async (command) => {
  const chunkStringified = command.toString().trim();
  const pathTwoVar = chunkStringified.slice(2);
  const twoPathArr =  pathTwoVar.trim().split(' ');

  if (twoPathArr.length === 2) {
    const file = twoPathArr[0];
    let new_path = twoPathArr[1];
    new_path = new_path.split('')[1] === ":" ? `${twoPathArr[1]}/${file}` : `${process.cwd()}/${new_path}/${file}`;

    
    const  read = fs.createReadStream(`${process.cwd()}/${file}`);
    const  write = fs.createWriteStream(`${new_path}`);

    read.on('error', () => console.log('Operation failed'))
    .pipe(write)
    .on('error', () => console.log('Operation failed'))
    .on('finish', () => {
      fs.unlink(`${process.cwd()}/${file}`, (err) => {
        if(err) {
          console.log('Operation failed')
        } else {
          console.log('Move was success')
        }
      })
  })
      } else {
    console.log('Invalid input');
  }
};
