var url = require('url');
var http = require('http');
var port = process.argv[2];

var handler = function(req, res) {
  var uri = url.parse(req.url, true);
  var dt = new Date(uri.query.iso);
  var json = {};
  //
  switch(uri.pathname) {
  case '/api/parsetime':
    json = {
      hour: dt.getHours(),
      minute: dt.getMinutes(),
      second: dt.getSeconds()
    };
    break;
  case '/api/unixtime':
    json = {
      unixtime: dt.getTime()
    };
    break;
  }
  res.write(JSON.stringify(json));
  res.end();
};

var server = http.createServer(handler);
server.listen(port);
