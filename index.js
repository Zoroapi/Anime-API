const express = require('express');
const { search } = require('./functions/search');
const { pchecker } = require('./helpers/checkparams');

var app = module.exports = express();
const port = 80;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/search', pchecker ,search);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));