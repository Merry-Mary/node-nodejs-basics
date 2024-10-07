import fs from 'node:fs';
import crypto from 'crypto';

const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    const content = fs.createReadStream('src/hash/files/fileToCalculateHashFor.txt');

    content.on('data', (chunk) => {
        console.log(chunk)
        process.stdout.write(crypto.createHash('sha256').update(chunk).digest('hex'));
    });
};

await calculateHash();