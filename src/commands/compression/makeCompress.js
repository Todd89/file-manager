import  zlib from 'zlib';
import fs from 'fs';

export const makeCompress = async (command) => {
  const gzip = zlib.createBrotliCompress();

  const chunkStringified = command.toString().trim();
  const pathTwoVar = chunkStringified.slice(8);
  const twoPathArr =  pathTwoVar.trim().split(' ');


  if (twoPathArr.length === 2) {

    const file = twoPathArr[0];
    let new_path = twoPathArr[1];

    new_path = new_path.split('')[1] === ":" ? `${new_path}/${file}.br` : `${process.cwd()}/${new_path}/${file}.br`;

    const  read = fs.createReadStream(`${process.cwd()}/${file}`);
    const  write = fs.createWriteStream(`${new_path}`);

         read.pipe(gzip).on('error', err => {console.log("Operation failed")}).pipe(write)
         .on('error', err => {console.log("Operation failed")})
         .on('finish', (err) => {
          console.log("Compress was successful")
            });
        } else {
          console.log("Operation failed")
        }
  };

