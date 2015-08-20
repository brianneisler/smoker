var max31855pi = require('max31855pi');
var listener = max31855pi(max31855pi({ cs: 8, so: 9, sck: 11 }));

listener.on('temperature', function (temp) {
    console.log('Current temp =', temp, 'C');
});

listener.start();
