import { access, writeFile } from 'node:fs/promises';
import errorMessage from './common.js';

const fileContent = 'I am fresh and young';

const create = async () => {
    await access('src/fs/files/fresh.txt').then(() => {
        try {
            throw new Error(errorMessage);
        } catch(error) {
            console.log(error)     
        }
    }).catch(async () => {
        await writeFile('src/fs/files/fresh.txt', fileContent);
    });
};

await create();