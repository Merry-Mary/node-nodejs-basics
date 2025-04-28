import { createWriteStream } from 'fs';

const write = async () => {
    const writeStream = createWriteStream('src/streams/files/fileToWrite.txt');
    process.stdin.on('data', (data) => {
        writeStream.write(data.toString());
    });

    console.log('Enter something into console');
};

await write();