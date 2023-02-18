const { add } = require('./add.js');
const { divide } = require('./divide.js');
const { minus } = require('./minus.js');
const { multiply } = require('./multiply.js');
const EventEmmiter = require('events');


let firstNum = Number(process.argv[2]);
let secondNum = Number(process.argv[3]);
let operation = process.argv[4];


if ( isNaN(firstNum) || isNaN(secondNum)) {
    console.log('Operation parameter is not a number. Try again.');
};

const myEmitter = new EventEmmiter();

myEmitter.on('result', (res) => {
    console.log(`Result: ${res}`);
});

const calcFunc = (firstNum, secondNum, operation) => {
    let res;

    funcs = {
        add: add(firstNum, secondNum),
        divide: divide(firstNum, secondNum),
        minus: minus(firstNum, secondNum),
        multiply: multiply(firstNum, secondNum)
    }
    res = funcs[operation];

    myEmitter.emit('result', res);
}


myEmitter.on( operation, (firstNum, secondNum, operation) => {
    calcFunc(firstNum, secondNum, operation);
});

myEmitter.emit(operation, firstNum, secondNum, operation);