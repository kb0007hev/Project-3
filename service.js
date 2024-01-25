const express = require('express');

const service = express();

service.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
});

service.listen(3000, function () {
    console.log('Listening on port 3000');
});