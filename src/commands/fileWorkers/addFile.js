import fs from 'fs';

export const addFile = async (command) => {
  const chunkStringified = command.toString().trim();
  const path = chunkStringified.slice(3);

  const file = `${process.cwd()}/${path.trim()}`;
  fs.promises.access(file, fs.constants.F_OK).then(
     () => {
      console.log("Operation failed");
   })
  .catch(() => fs.writeFile(file, "",  function (err) {
             if (err) {
              console.log("Operation failed");
             } else {
              console.log("Add file was successful");
             } 
       }));
}