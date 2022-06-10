import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const arg = process.argv.slice(2).filter(arg => arg.startsWith('--username')).toString();
const finalIndex = arg.indexOf('=');
export const name = arg.slice(finalIndex + 1)

export const greeting = async () => {
   process.stdout.write(`Welcome to the File Manager, ${name}!\n`);
}