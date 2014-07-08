var mod = require('./06_module');
var ext = process.argv[3];
var dir = process.argv[2];

mod(dir, ext, function(err, filtered) {
  if (err) throw err;
  filtered.forEach(function(file) {
    console.log(file);
  });
});
