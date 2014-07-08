var http = require('http');
var url = process.argv[2];

http.get(url, function(res) {
  var ret = '';

  res.on('data', function(data) {
    ret+= data;
  });

  res.on('end', function() {
    console.log(ret.length);
    console.log(ret.toString());
  }) 

});
