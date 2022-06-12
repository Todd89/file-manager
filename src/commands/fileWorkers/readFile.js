import fs from 'fs';

export const readFile = async (command) => {
  const chunkStringified = command.toString().trim();
  const path = chunkStringified.slice(3).trim();

  const file = path.split('')[1] === ":" ? `${path}` : `${process.cwd()}/${path.trim()}`;

  const  read = fs.createReadStream(`${file}`);
  read.on('data', (chank) => {
    console.log(chank.toString().trim())
  }).on('error', () => {
    console.log("Operation failed")
  })
};
