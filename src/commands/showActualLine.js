export const showActualLine = () => {
  process.stdout.write(`You are currently in path_to_working_directory: ${process.cwd()}\n`);
}