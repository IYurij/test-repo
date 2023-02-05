const myEmitter = new myEmitter();
myEmitter.on('add', (a, b) => {
    myEmitter.emit('result', a + b);
});

myEmitter.emit('add', 1, 3);
myEmitter.on('result', ())