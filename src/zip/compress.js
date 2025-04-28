import { createReadStream, createWriteStream } from 'node:fs';
import { access, constants } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';

const folder = './src/zip/files/';

const compress = async () => {  
    const readStream = createReadStream(folder +'fileToCompress.txt').setEncoding('utf8');
    const writeStream = createWriteStream(folder + 'archive.gz');
    
    try {
        await access(folder + 'archive.gz', constants.F_OK);
        console.error('Error: archive.gz already exists.');
        return;
    } catch (_e) {}

    try {
        await pipeline(
            readStream,
            createGzip(),
            writeStream
        );

        console.log('File successfully compressed')
    }
    catch (e) {
        console.error('An error occurred:', e);
    }    
};

await compress();
