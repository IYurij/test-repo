const { add } = require('./add.js');
const { divide } = require('./divide.js');
const { minus } = require('./minus.js');
const { multiply } = require('./multiply.js');
const EventEmmiter = require('events');


let firstNum = Number(process.argv[2]);
let secondNum = Number(process.argv[3]);
let operation = process.argv[4];


if ( isNaN(firstNum) || isNaN(secondNum)) {
    throw new Error('Operation parameter is not a number. Try again.');
};

const myEmitter = new EventEmmiter();

myEmitter.on('result', (res) => {
    console.log(`Result: ${res}`);
});

const calcFunc = (firstNum, secondNum, operation) => {
    
    const operations = {
        add: add,
        divide: divide,
        minus: minus,
        multiply: multiply
    }

    try {
        const res = operations[operation](firstNum, secondNum);
        myEmitter.emit('result', res);
    }
    catch {
        throw new Error('One of arguments is wrong. Try again.');
    }
}


myEmitter.on( operation, (firstNum, secondNum, operation) => {
    calcFunc(firstNum, secondNum, operation);
});

myEmitter.emit(operation, firstNum, secondNum, operation);