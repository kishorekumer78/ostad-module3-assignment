// 3.Numbers:
// a. Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.
// b. Implement the function to check if a given positive integer is a prime number.

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(6));
