"use strict";

/*
01) removeItem function

// TODO: Implement a removeItem function.

 The first parameter is an array.
 The second parameter is a number. It's the non-zero-based index of the item that should get deleted.
 Remove the item and return an array.
 Ensure that the original array was not mutated.

*/

// TODO: Mit splice() shallow copy
// function removeItem(array, index) {
//   array.splice(index, 1);
//   return array;
// }

// TODO: Mit slice() 

function removeItem(array, index) {
    let copy = array.slice();
    copy.splice(index - 1, 1);
    return copy;
}

const animals = ["Dog", "Cat", "Lion"];
const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];

console.log(removeItem(animals, 1)); // ['Cat', 'Lion']
console.log(animals); //[ 'Dog', 'Cat', 'Lion' ]

console.log(removeItem(fruits, 3)); // [ 'Watermelon', 'Banana', 'Kiwi', 'Pineapple', 'Apple' ]
console.log(fruits); // [ 'Watermelon', 'Banana', 'Cherry', 'Kiwi', 'Pineapple', 'Apple' ]

// remove every second fruit

const fruitBasket = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];

function pickFruits(fruitBasket) {
    const newFruitBasket = [];

    for (let index = 0; index < fruitBasket.length; index += 2) {
        newFruitBasket.push(fruitBasket[index]);
    }
    return newFruitBasket;
}

console.log(pickFruits(fruitBasket));






// function sumOfCharacters(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === "string") {
//             // console.log(array[i]);
//             sum += array[i].length;
//         }
//     }
//     return sum;
// }

function sumOfCharacters(array) {
    let sum = 0;
    for (let element of array) {
        if (typeof element === "string") {
            sum += element.length;
        }
    }
    return sum;
}

const arr1 = ["Luke", Boolean, "Anakin", true, "Obi Wan", 333];
const arr2 = [
    "Code is",
    "like humor",
    ".",
    "When you have",
    "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr1)); // result 17
console.log(sumOfCharacters(arr2)); // result 55
