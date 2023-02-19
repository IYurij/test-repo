const { parentPort, workerData } = require('worker_threads');
const { filterArray } = require('./common');

const work = ({ array }) => {
    const arr = filterArray(array);
    return arr;
}

parentPort.postMessage(work(workerData));
