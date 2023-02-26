const notifier = require('node-notifier');

const [_, __, hh, mm, ss] = process.argv;

const notify = {
    title: 'My notification',
    message: 'Hello, there!',
    sound: false,
    timeout: 0,
};

function argsToSec( ...args ) {
    if (args.length > 3) {
        return;
    }

    let timeToEnd = 0;
    for (i of args ) {
        let period = i.split('').slice(-1)[0];
        let value = parseInt(i);
        switch (period) {
            case ("h"):
                timeToEnd += value * 60 * 60;
                break;
            case ("m"):
                timeToEnd += value * 60;
                break;
            case ("s"):
                timeToEnd += value;
                break;
            default:
                console.log('Incorrect parameter!');
        }
    }

    return timeToEnd;
}

function endTimer() {
    notifier.notify(notify);
    console.log('Timer finished');
}

timerPeriod = argsToSec(hh, mm, ss);

setTimeout(endTimer, timerPeriod * 1000);
