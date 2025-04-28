import { readdir } from 'node:fs/promises';
import errorMessage from './common.js';

const list = async () => {
    try {
        const files = await readdir('src/fs/files');
        for (const file of files) {
            console.log(file);
        }
    } catch(error) {
        throw new Error(errorMessage);
    }
};

await list();