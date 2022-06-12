import os from 'os';

export const workWithOS = async (command) => {
  const chunkStringified = command.toString().trim();
  const arg = chunkStringified.slice(2).trim();
  const nameArgIndex = process.argv[2].indexOf('=');
  const name = process.argv[2].slice(nameArgIndex + 1);

  const trueArguments = new Set (['--EOL', "--cpus", "--homedir", "--username", "--architecture"]);

  if(trueArguments.has(arg)) {
    switch (arg) {
      case "--EOL": console.log(JSON.stringify(os.EOL));
      break;
      case "--cpus":  console.log(os.cpus());
      break;
      case "--homedir": console.log(os.homedir());
      break;
      case "--username": console.log(name);
      break;
      case "--architecture": console.log(os.arch());
      break;
      default: console.log("Invalid input\n");
      break;
    }
  } else {
    process.stdout.write("Invalid input\n");
  }
}