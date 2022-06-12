import os from  "os";

const getHomeDirectory = () => {
  const home = os.homedir();
  process.chdir(home)
  process.stdout.write(`You are currently in path_to_working_directory: ${process.cwd()}\n`)
  process.stdout.write(`Please, input your command\n`)
}

export default getHomeDirectory;