"use-strict";

/*
01) oddNumbers function
// TODO: Implement a oddNumbers function.

The function has two parameters, both are numbers.
Iterate over all numbers between first number and the second number.
Store all oddNumbers in string, seperated by a comma and return the string.
Allowed are only positive numbers, add a check.
*/

let oddNumbers = function (firstNumber, secondNumber) {
    let oddNumbers = "";
    for (let i = firstNumber; i <= secondNumber; i++) {
        if (i % 2 !== 0) {
            oddNumbers += i + ", ";
        }
    }
    return oddNumbers;
};

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

console.log("================");

/*
02) charCount function
// TODO: Implement a charCount function.

The function has a first parameter for a word which is a string.
The function has a second parameter which contains the character to search for which is a string.
Check if the second parameter consists of only one character, if not, quit the function.
The function returns the number of times the character from the second parameter is present in the word.
The function should be case insensitive.
*/

let charCount = function (word, character) {
    word = word.toLowerCase();
    character = character.toLowerCase();

    if (character.length !== 1) {
        return;
    }

    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === character) {
            count++;
        }
    }
    return count;
};

console.log(charCount("hello", "l")); // result should be: 2
console.log(charCount("mama", "m")); // result should be: 2
console.log(charCount("Resümee", "e")); // result should be: 3
console.log(charCount("Ananas", "a")); // result should be: 3
console.log(charCount("Ananas", "an")); // result should be: undefined