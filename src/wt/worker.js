import { parentPort } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (n) => {
    try {
        const result = nthFibonacci(n);
        parentPort.postMessage({ status: 'resolved', data: result });
    } catch (error) {
        console.log(error)
        parentPort.postMessage({ status: 'error', data: null });
    }
};

parentPort.on('message', (n) => {
    sendResult(n);
});
