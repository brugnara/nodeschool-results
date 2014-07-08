var numbers = process.argv.slice(2);
var sum = 0;
numbers.forEach(function(number) {
  sum+= parseInt(number, 10);
});

console.log(sum);
