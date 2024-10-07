import { readFile } from 'node:fs/promises';
import errorMessage from './common.js';

const read = async () => {
    try {
        const fileContent = await readFile('src/fs/files/fileToRead.txt', { encoding: 'utf8' });
        console.log(fileContent);
    } catch(error) {
        throw new Error(errorMessage);
    }
};

await read();