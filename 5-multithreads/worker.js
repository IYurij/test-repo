const { parentPort, workerData } = require('worker_threads');
const { filterArray } = require('./common');

const work = ({ array }) => {
    return filterArray(array);
}

parentPort.postMessage(work(workerData));
