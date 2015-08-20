var max31855pi = require('max31855pi');
var listener = max31855pi(max31855pi({ cs: 18, so: 12, sck: 22 }));

listener.on('temperature', function (temp) {
    console.log('Current temp =', temp, 'C');
});

listener.start();
