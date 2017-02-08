var app = require('./app.js');
var config = require('./config.js');
var server = require('http').createServer(app);
var io = app.io;

io.attach(server);
server.listen(config.port, config.ip, function(){
	console.log("listening on port: " + config.port + "...");
});