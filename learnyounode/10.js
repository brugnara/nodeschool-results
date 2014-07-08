var net = require('net');
var port = process.argv[2];
var moment = require('moment');

function handler(socket) {
  socket.write(moment().format('YYYY-MM-DD HH:mm'));
  socket.end();
};

var server = net.createServer(handler);
server.listen(port);
