/**
 * Generate the FizzBuzz sequence for values 1 through n.
 *
 * For each i from 1 to n:
 *   - "FizzBuzz" if i is divisible by 15
 *   - "Fizz" if i is divisible by 3
 *   - "Buzz" if i is divisible by 5
 *   - the number as a string otherwise
 *
 * @param {number} n - Upper bound (inclusive). Values <= 0 yield an empty array.
 * @returns {string[]} Array of length max(n, 0) with the FizzBuzz values.
 */
export function fizzbuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }
  return result;
}
