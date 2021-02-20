/*
Your first assignment deals with numbers.
Check and display whether each number in a given list of numbers is even or odd.
*/

const solution = require("./solutions.js")
// Don't open solutions.js under penalty of law!

const list = [
  6, 9, 4, 2, 0, 1, 3, 3, 7
];

solution.test(); // This tells you what your program should output. Click run to test it.

/*
 Your goal is to match that output from above by fixing the below code.
*/

for (i=5; i<=list.length; i++) {
  if (list[1] % 2 == 0) {
    console.log("odd")
  }
  else {
    console.log("even");
  }
}

