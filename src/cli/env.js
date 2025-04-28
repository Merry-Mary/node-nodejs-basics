import { env } from 'node:process';

const parseEnv = () => {
    for (let item in env) {
        if (item.includes('RSS_')) {
            console.log(`${item}=${env[item]}`);
        }
    }
};

parseEnv();