var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function(err, data) {
  if (!err) {
    var lines = data.toString().split('\n');
    console.log(lines.length -1);
  }
});
