// CS1 solutions
/* cc36 sumOfDigits - https://repl.it/student/submissions/1448448
Write a function called sumOfDigits that given a positive integer, returns the sum of its digits.
Assume all numbers will be positive.

Input: 23  >>>function>>> Output: 5
Input: 496 >>>function>>> Output: 19
*/

// SOLUTION 1
// function sumOfDigits (num) {
//   const integerStrings = ('' + num).split('');
//   // const integerStrings = String(num).split('');
//   // console.log(typeof(integerStrings))
//   // const len = integerStrings.length;
//   // console.log(integerStrings);
//   // let i = 0,
//   //   sum = 0;
//   // for (i; i < len; i++) {
//   //   sum += Number(integerStrings[i]);
//   //   // console.log(sum);
//   // }
//   // return sum;
// }

// SOLUTION 2
// function sumOfDigits (num) {
// //   const stringIntegers = ('' + num).split('');
// //   // console.log(`strInts.len: ${stringIntegers.length} & the strInts ${stringIntegers} are: ${typeof(stringIntegers[0])}`);
// //   const integers = stringIntegers.map(num => Number(num));
// //   // console.log(`integers: ${integers} are: ${typeof(integers[0])}`);
// //   const sum = integers.reduce((sum, n) => sum + n, 0);
// //   return sum;
// }

// MODEL SOLUTION
function sumOfDigits(num) {
  return (String(num)).split('')
    .map(num => parseInt(num))
    .reduce((sum, n) => sum + n);
}

/* eslint no-console: 0 */
// TEST SUITE
const x = 12345;
console.log(sumOfDigits(x));   // ~~~> 15
console.log(sumOfDigits(23));  // ~~~> 5
console.log(sumOfDigits(496)); // ~~~> 19
console.log(typeof(sumOfDigits(496))); // ~~~> number
console.log(typeof(Number(x)));   // <--- number
console.log(typeof(String(x)));   // <--- string
console.log(typeof(parseInt(x))); // <--- number
console.log(String(x).split(''));
