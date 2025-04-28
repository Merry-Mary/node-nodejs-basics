import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const child = spawn('node', ['./src/cp/files/script.js', ...args]);

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);

    child.on('close', (code) => {
        console.log(`Child process finished: ${code}`);
    });

    child.on('error', (err) => {
        console.error('Child process error:', err);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([ 'first', 'second', 'third']);
