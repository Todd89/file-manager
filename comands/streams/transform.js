import {pipeline, Transform} from 'stream';

const read = process.stdin;
const write = process.stdout;

 const transform = () => {
    const transform = new Transform ({
      transform(chunk, enc, cb) {
            const newChunk = chunk.toString().trim();
            const reverseChunk = newChunk.split('').reverse().join('') + '\n';
            cb(null, reverseChunk)
      }
    })
   pipeline(read, transform, write, err=>console.log(err))
};

transform()

