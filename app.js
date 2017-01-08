var express = require('express');
var app = express();
var path = require('path');
var index = require('./routes/index.js');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'webpages'));

app.get('/', index);
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;