"use-strict";

/*
05) Coding-Task: If & switch statements

01) Spot the errors and fix them
// TODO: Copy the following complete code block to your script.js file and try to spot and fix the errors.

const size = 25;
let result;

if (size > 10) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

*/

const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);
console.log("================");

/*
02) oddEven function
// TODO: Implement a oddEven function.

The function has one parameter which is a number
If the number is an even number, the function returns the string even
If the number is an odd number, the function returns the string odd

*/
// let oddEven = function (number) {
//   if (number % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// };

let oddEven = function (number) {
  const isEvenNumber = number % 2 === 0;
  if (isEvenNumber) {
    return "even";
  } else {
    return "odd";
  }
};

console.log(oddEven(4));
console.log(oddEven(3));
console.log(oddEven(-1));
console.log(oddEven(10));
console.log("================");

/*
03) oldYoung function
// TODO: Implement a oldYoung function.

The function has one parameter which is a number
If the number is less than 16, return "children"
If the number is less than 50, return "young person"
Otherwise return "elder person"
If the number is not a number or a negative number a string invalid parameter
*/

function oldYoung(number) {
  if (typeof number !== "number" || number < 0) {
    return "invalid parameter";
  } else if (number < 16) {
    return "children";
  } else if (number < 50) {
    return "young person";
  } else {
    return "elder person";
  }
}

console.log(oldYoung(27));
console.log(oldYoung(6));
console.log(oldYoung(-1));
console.log(oldYoung(86));
console.log("================");
