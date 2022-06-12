import fs from 'fs';

export const readFile = async (command) => {
  const chunkStringified = command.toString().trim();
  const path = chunkStringified.slice(3).trim();
  const file = path.split('')[1] === ":" ? `${path}` : `${process.cwd()}/${path.trim()}`;
    await fs.promises.readFile(file, 'utf8').then((res)=>{
      console.log(res)
    }).catch(err => {
       console.log("Operation failed")
    })
};
