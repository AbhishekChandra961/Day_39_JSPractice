function primeFactors(n) {
  const factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }

  return factors;
}

// Example usage
const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter the number : "));
const factors = primeFactors(num);
console.log("Prime Factors are : "+factors);
