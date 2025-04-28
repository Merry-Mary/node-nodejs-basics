import { rm } from 'node:fs/promises';
import errorMessage from './common.js';

const remove = async () => {
    try {
        await rm('src/fs/files/fileToRemove.txt');
    } catch(error) {
        throw new Error(errorMessage);
    }
};

await remove();