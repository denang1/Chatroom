var app = require('./app.js');
var config = require('./config.js');

app.listen(config.port, function(){
	console.log("listening on port: " + config.port + "...");
});