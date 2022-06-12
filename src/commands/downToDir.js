import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const downToDir = (command) => {
  const chunkStringified = command.toString().trim();
  const downDir = chunkStringified.slice(2).trim();
  const new_path = downDir.split('')[1] === ":" ? `${downDir}` : `${process.cwd()}//${downDir.trim()}`;

  try {
    process.chdir(`${new_path}`)
  } catch {
    console.log("Invalid input")
  }
};

