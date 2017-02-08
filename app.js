var express = require('express');
var app = express();
var path = require('path');
var socketIO = require('socket.io');
var index = require('./routes/index.js');

var io = socketIO();
var socketHandler = require('./routes/socketHandler.js')(io);

app.io = io;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'webpages'));

app.get('/', index);
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;