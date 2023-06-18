// 2.Math Object:
// a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.
// b. Implement the function to display the square root of the sum of squares for an array of numbers.

function sumOfSquareOfNumbers(arr = []) {
  var sum = 0;
  arr.forEach((el) => {
    var sq = Math.pow(el, 2);
    sum = sum + sq;
  });
  return sum;
}
function sqrootOfSumOfNumbers(arr = []) {
  var result = sumOfSquareOfNumbers(arr);
  var finalRes = Math.sqrt(result).toFixed(2);
  return finalRes;
}
var res = sqrootOfSumOfNumbers([12, 10, 25]);
console.log(res);
