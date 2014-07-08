var file = process.argv[2];
var fs = require('fs');
var content = fs.readFileSync(file).toString();
var lines = content.split('\n');

console.log(lines.length -1);
