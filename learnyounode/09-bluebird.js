var Promise = require('bluebird');
var request = Promise.promisify(require('request'));
var urls = process.argv.slice(2);

Promise.map(urls, function(url) {
  // usiamo .spread perché request ha più di un risultato da cui leggere!
  return request(url).spread(function(res, body) {
    return body;
  });
}).each(function(data) {
  console.log(data);
});

