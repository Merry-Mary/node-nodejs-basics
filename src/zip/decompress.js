import { createReadStream, createWriteStream } from 'node:fs';
import { access, constants } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import { createGunzip } from 'node:zlib'; // ВАЖНО: createGunzip, не createGzip

const folder = './src/zip/files/';

const decompress = async () => {
    const archivePath = folder + 'archive.gz';
    const outputPath = folder + 'fileToCompress.txt';

    try {
        await access(archivePath, constants.F_OK);
    } catch (e) {
        console.error('Error: archive.gz does not exist.');
        return;
    }

    const readStream = createReadStream(archivePath);
    const writeStream = createWriteStream(outputPath);

    try {
        await pipeline(
            readStream,
            createGunzip(),
            writeStream
        );
        console.log('File successfully decompressed');
    } catch (e) {
        console.error('An error occurred during decompression:', e);
    }
};

await decompress();