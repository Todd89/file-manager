import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const downToDir = (command) => {
  const chunkStringified = command.toString().trim();
  const downDir = chunkStringified.slice(2);


  const actualDir = process.cwd();
  try {
    process.chdir(`${actualDir}/${downDir.trim()}`)
  } catch {
    console.log("Invalid input")
  }
};

