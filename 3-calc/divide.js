function divide(a, b) {
    if (b === 0) {
        return 'Dividing by zero.';
    }
    return a / b;
}

module.exports = { divide }
