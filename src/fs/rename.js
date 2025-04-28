import { rename as renameFile} from 'node:fs/promises';
import errorMessage from './common.js';

const rename = async () => {
    try {
        await renameFile('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md')
    } catch(error) {
        throw new Error(errorMessage);
    }
};

await rename();