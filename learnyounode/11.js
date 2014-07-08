var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var file = process.argv[3];

var handler = function(req, res) {
  fs.createReadStream(file).pipe(res);
};

var server = http.createServer(handler);
server.listen(port);
