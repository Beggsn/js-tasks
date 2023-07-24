"use-strict"
/*
1. Greet function
Implement a welcomeMsg function.

The first parameter is the name of the person to be greeted. It's a string.
The function should return a string that contains the name of person in a welcome msg.
// TODO: implement welcomeMsg function

console.log(welcomeMsg("Jane"));
Welcome Jane!

console.log(welcomeMsg("Marc"));
Welcome Marc!
*/

function welcomeMsg(name) {
    return `Welcome ${name}!`;
}

//  oder so:

// function welcomeMsg(name) {
//     return "Welcome " + name + "!";
// }

console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));
console.log("================");

/* 
2. Gross Price Function
Implement a calcGrossPrice function.

 The first parameter is the net price as integer number
 The second parameter is the tax rate as float number
 The function should return the gross price
// TODO: implement calcGrossPrice function

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4
*/

function calcGrossPrice(netPrice, taxRate) {
    return netPrice + (netPrice * taxRate);
}

console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));
console.log("================");


/*
Add Positive Function
Implement a addPositive function.

 The function has two parameters which will always be numbers
 The function should add the two numbers and return the result
 If any of the arguments is a negative number, it should be handled as a positive number (see example code)
// TODO: Implement the addPositive function

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result3 should be 9
*/

// function addPositive(num1, num2) {
//     if (num1 < 0) {
//         num1 = num1 * -1;
//     }
//     if (num2 < 0) {
//         num2 = num2 * -1;
//     }
//     return num1 + num2;
// }
function addPositive(num1, num2) {
    
    return Math.abs(num1 + num2);
}

console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));
console.log("================");