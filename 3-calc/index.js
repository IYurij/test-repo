// node index.js num num <operation>
const { add } = require('./add.js');
const { divide } = require('./divide.js');
const { minus } = require('./minus.js');
const { multiply } = require('./multiply.js');


const firstNum = Number(process.argv[2]);
const secondNum = Number(process.argv[3]);
const operation = process.argv[4];


if ( isNaN(firstNum) || isNaN(secondNum)) {
    throw new Error('Operation parameter is not a number. Try again.');
} 

const operations = {
    add: add,
    divide: divide,
    minus: minus,
    multiply: multiply
}

const res = operations[operation](firstNum, secondNum);

if (res != undefined) {
    console.log(`Result: ${res}`);
}
