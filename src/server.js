const express = require('express');
const morgan = require('morgan');

const HOST = '0.0.0.0';
const PORT = 3000;

var app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, HOST, () => console.log('listening on port ' + PORT));
