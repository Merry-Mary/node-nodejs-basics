import { argv } from 'node:process';

const parseArgs = () => {
    const list = [];
    argv.forEach((arg, index) => {
        if (arg.startsWith('--') && argv[index + 1]) {
            list.push(`${arg.slice(2)} is ${argv[index + 1]}`);
        }
    });

    console.log(list.join(', '));
};

parseArgs();