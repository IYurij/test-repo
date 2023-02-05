// node index.js num num <operation>
const { add } = require('./add.js');

let firstNum = Number(process.argv[2]);
let secondNum = Number(process.argv[3]);
let operation = process.argv[4];

if ( isNaN(firstNum) || isNaN(secondNum)) {
    console.log('Operation parameter is not a number. Try again.');
} else {
    let res;

    switch(operation) {
        case('add'):
            res = add(firstNum, secondNum);
            break;
        case('divide'):
            //
            break;
        case('minus'):
            //
            break;
        case('multiply'):
            //
            break;
        default:
            console.log(`Operation ${operation} not implemented.`);
    };

    if (res != undefined) {
        console.log(`Result: ${res}`);
    }
}