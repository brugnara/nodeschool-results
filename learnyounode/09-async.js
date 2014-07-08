var http = require('http');
var urls = process.argv.slice(2);
var bl = require('bl');
var async = require('async');
var resp = {};

async.map(urls, function(url, cb) {

  http.get(url, function(res) {

    res.pipe(bl(function(err, data) {
      cb(null, data.toString());
    }));

  });

}, function(err, mappedUrls) {
  mappedUrls.forEach(function(url) {
    console.log(url);
  });
});

