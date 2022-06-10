import child_process from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


export const spawnChildProcess = async (args) => {
   child_process.fork(`${__dirname}/files/script.js`, [args]);
};

spawnChildProcess([5,4,3])