import crypto from 'crypto';
import { readFileSync } from 'fs';

export const calculateHash = async () => {
  const file = readFileSync('./files/fileToCalculateHashFor.txt')
  const hash = crypto.createHash('sha256').update(file).digest('hex');
  console.log(hash)
  return hash
};

calculateHash();