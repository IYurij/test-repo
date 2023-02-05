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
    if (operation === 'add') {
        res = add(firstNum, secondNum);
    } else if (operation === 'divide') {
        if (secondNum === 0) {
            res = 'Dividing by zero.';
        } else {
            res = divide(firstNum, secondNum);
        }
    } else if (operation === 'minus') {
        res = minus(firstNum, secondNum);
    }
    else if (operation === 'multiply') {
        res = multiply(firstNum, secondNum);
    } else {
        res = `Operation ${operation} not implemented.`;
    }

    myEmitter.emit('result', res);
}


myEmitter.on( operation, (firstNum, secondNum, operation) => {
    calcFunc(firstNum, secondNum, operation);
});

myEmitter.emit(operation, firstNum, secondNum, operation);