var express = require('express');
var app = express();
module.exports = function(io) {
    io.on("connection", function(socket){
        console.log("User is connected!");
        socket.on("msgSent", function(data){
            console.log(data.msg);
            socket.broadcast.emit("msgReceived", data.msg);
        });
    });
    return app;
}