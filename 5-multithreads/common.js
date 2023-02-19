const getArray = (start, end) => {
    const arr = [];
    for (let i = start; i < end; i++) {
        arr.push(i);
    }
    return arr;
}

const splitedArray = (arraySize, numParts = 1) => {
    let onePartLength = arraySize / numParts;
    let arrs = [];
    for (let i = 0; i < numParts; i++){
        let start = onePartLength * i + 1;
        let end = onePartLength * i + onePartLength;
        let arr = getArray(start, end);
        arrs.push(arr);
    }

    return arrs;
}

const filterArray = (array) => {
    const arr = [];
    for (let i = 0; i < array.length; i++) {
        if ( array[i] % 3 == 0 ) {
            arr.push(array[i]);
        }
    }

    return arr;
}

module.exports = { filterArray, splitedArray }