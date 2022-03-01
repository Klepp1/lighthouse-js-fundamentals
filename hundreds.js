let number = 0;
const howManyHundreds = function(num) {
  number = num / 100;
  return Math.floor(number)
}
console.log(howManyHundreds(123456));