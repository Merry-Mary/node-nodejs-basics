import { Transform } from 'stream';

const transform = async () => {
    const transform = new Transform({
        transform(chunk, encode, callback) {
            callback(null, chunk.toString().split('').reverse().join(''))
        }
    })
    process.stdin.pipe(transform).pipe(process.stdout);
    console.log('Enter something into console')
};

await transform();