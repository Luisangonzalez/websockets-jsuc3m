var express = require('express');
var app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

var fs = require('fs');

io.set('log level', 1);

app.configure(function(){
    app.use(express.static(__dirname + '/public'));
});


io.sockets.on('connection', function (socket) {
	console.log('connectado '+socket.handshake.address.address);
	socket.on('text update', function (text) {
		io.sockets.emit('text update', text);
	});
});

server.listen(8888);
