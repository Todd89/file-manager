import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { Worker }from 'worker_threads';
import os from 'os';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const performCalculations = async () => {
  const cores = os.cpus().length
  let promises = [];
  const makeThreads = (coresNum) => {
    let maxThread = coresNum;
    let startNum = 10;
    for (let i = 0; i < maxThread; i++) {
      const newPromise = new Promise((resolve, reject) => {
        const worker = new Worker(`${__dirname}/worker.js`, { workerData: startNum });
        
        worker.on('message', (data) =>{
          if(data) {resolve({status: "resolved", data})}
           else {{resolve({status: "resolved", data: null})}}
        });
        worker.on('error', () => resolve({status: "error", data: null}));
        worker.on('exit', (code) => {
          if (code !== 0)
            reject({status: "resolved", data: null});
        })
      }).catch(err => console.log(err));
      promises.push(newPromise)
      startNum += 1;
    }
    return promises;
}

  async function run() {
    const promisesThreads = makeThreads(cores);
    Promise.all(promisesThreads).then(obj => console.log(obj));
  }
  await run().catch(err => console.error(err))
};

performCalculations()