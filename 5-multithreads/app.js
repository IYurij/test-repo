const { performance, PerformanceObserver } = require('perf_hooks');
const { Worker } = require('worker_threads');
const { splitedArray, filterArray } = require('./common');
const os = require('os');

const performanceObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
        console.log(`${entry.name} : ${entry.duration}`);
    })
});
performanceObserver.observe({ entryTypes: ['measure']});

const numOfCpus = os.cpus().length;

const linearFunction = (array) => {
    performance.mark('linear start');
    filterArray(array);
    performance.mark('linear end');
    performance.measure('Linear function', 'linear start', 'linear end');
};

const workerFunction = (array, id) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {
            workerData: { array }
        });
        worker.on('message', (msg) => {
            resolve(msg);
        });

        worker.on('error', (err) => {
            reject(err);
        });

        worker.on('exit', () => {
            console.log(`Worker ${id} finished work.`);
        });
    });
};

const multithreadFunction = async (arrs) => {
    try {
        performance.mark('worker start');
        let funcs = [];
        for (let i = 0; i < arrs.length; i++) {
            funcs.push(workerFunction(arrs[i], i));
        };
        
        await Promise.all(funcs);
        
        performance.mark('worker end');
        performance.measure('Multithread function', 'worker start', 'worker end');
    }
    catch (e) {
        console.log(e.message);
    }
};

const main = () => {
    const arraySize = 300000;
    const array = splitedArray(arraySize);
    const arrays = splitedArray(arraySize, numOfCpus);

    linearFunction(array[0]);
    multithreadFunction(arrays);
}

main();
