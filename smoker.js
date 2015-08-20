var max31855pi = require('max31855pi');
var listener = max31855pi();

listener.on('temperature', function (temp) {
    console.log('Current temp =', temp, 'C');
});

listener.start();
