import { createReadStream } from 'node:fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'node:process';

const file = fileURLToPath(import.meta.url);
const dirName = dirname(file);

const read = async () => {
    const readStream = createReadStream('src/streams/files/fileToRead.txt').setEncoding('utf8');
    readStream.on('data', (chunk) => {
        stdout.write(chunk);
    });
};

await read();