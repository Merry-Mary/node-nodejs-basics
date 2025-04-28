import { cp } from 'node:fs/promises';
import errorMessage from './common.js';

const copy = async () => {
    try {
        await cp('src/fs/files', 'src/fs/files_copy', { recursive: true, errorOnExist: true, force: false });
    } catch(error) {
        throw new Error(errorMessage);
    }
};

await copy();
