let hh = process.argv[2];
let mm = process.argv[3];
let ss = process.argv[4];

let args = [hh, mm, ss];

function argsToSec( args ) {
    if (args.length > 3) {
        return;
    }

    t = 0;
    for (i of args ) {
        let period = i.split('').slice(-1)[0];
        let value = parseInt(i);
        switch (period) {
            case ("h"):
                t = t + (value * 60 * 60);
                break;
            case ("m"):
                t = t + (value * 60);
                break;
            case ("s"):
                t = t + value;
                break;
            default:
                console.log('Incorrect parameter!');
        }
    }
    
    return t;
}

function endTimer() {
    console.log('Timer finished');
}

timerPeriod = argsToSec( args );

setTimeout(endTimer, timerPeriod);
