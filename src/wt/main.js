import os from 'os';
import path from 'path';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    const numCores = os.cpus().length;
    const workers = [];

    for (let i = 0; i < numCores; i++) {
        workers.push(
            new Promise((resolve) => {
                const worker = new Worker(path.resolve(__dirname, './worker.js'));
                worker.on('message', (msg) => {
                    resolve(msg);
                });

                worker.on('error', () => {
                    resolve({ status: 'error', data: null });
                });

                worker.postMessage(10 + i);
            })
        );
    }

    const result = await Promise.all(workers);
    console.log(result);
};

await performCalculations();