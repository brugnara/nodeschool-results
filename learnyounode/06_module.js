var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, cb) {
  fs.readdir(dir, function(err, files) {
    var ret = [];
    if (err) return cb(err);
    files.forEach(function(file) {
      if (path.extname(file) == '.' + ext) {
        ret.push(file); 
      }
    });
    cb(null, ret);
  });
};
