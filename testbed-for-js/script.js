// pure function
// function multiply(num1, num2) {
//   const result = num1 * num2;
//   return result;
// }
function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(2, 3));
console.log("==================");

// reverse word function

function reverseWord(word) {
  let reverseWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
    console.log(i, reverseWord);
  }
  return reverseWord;
}

console.log(reverseWord("hello"));
console.log("==================");

// opposite number function
// function oppositeNumber(number) {
//   return number * -1;
// }

function oppositeNumber(number) {
  return Math.abs(number);
}

function oppositeNumber(number) {
  return -number;
}
console.log(oppositeNumber(2));
console.log(oppositeNumber(-2));
console.log(oppositeNumber(0));
console.log("==================");

// positive number function
function positiveNumber(number) {
  if (number < 0) {
    number = number * -1;
  }
  return number;
}

console.log(positiveNumber(2));
console.log(positiveNumber(-2));
console.log(positiveNumber(0));
console.log("==================");

/* 
Complete the function which returns the weekday according to the input number:

1 returns "Monday"
2 returns "Tuesday"
3 returns "Wednesday"
4 returns "Thursday"
5 returns "Friday"
6 returns "Saturday"
7 returns "Sunday"
Otherwise returns "Wrong, please enter a number between 1 and 7"
*/

function weekday(number) {
  switch (number) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Wrong, please enter a number between 1 and 7";
  }
}
console.log(weekday(1)); // "Monday"
console.log(weekday(7)); // "Sunday"
console.log(weekday(-1)); // "Wrong, please enter a number between 1 and 7"
console.log(weekday(8)); // "Wrong, please enter a number between 1 and 7"

/*

function weekday(number) {
  if (number < 1 || number > 7) {
    return "Wrong, please enter a number between 1 and 7";
  }

  if (number === 1) {
    return "Monday";
  } else if (number === 2) {
    return "Tuesday";
  } else if (number === 3) {
    return "Wednesday";
  } else if (number === 4) {
    return "Thursday";
  } else if (number === 5) {
    return "Friday";
  } else if (number === 6) {
    return "Saturday";
  } else if (number === 7) {
    return "Sunday";
  } else {
    return "Wrong, please enter a number between 1 and 7";
  }
}
*/
console.log("==================");

// splice method
// Syntax: array.splice(start, deleteCount, element1, element2, ...);

// remove entries

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
numbers.splice(3, 2);
console.log(numbers); // [1, 2, 3, 6, 7, 8, 9, 10]

// add entries

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers2);
numbers2.splice(9, 0, 11, 12, 13);
console.log(numbers2);

// replace entries

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers3);
numbers3.splice(10, 0, 11, 12, 13);
console.log(numbers3);
console.log("==================");

const countries = [
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Germany",
  "Italy",
  "Turkey",
];
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}

console.log("==================");

// for of loop

for (let country of countries) {
  console.log(country);
}
console.log("==================");

// letztes element ausgeben
console.log(`last country:` + countries[countries.length - 1]);
console.log("==================");

// lösche jedes zweite element aus dem Array

const countries2 = [
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Germany",
  "Italy",
  "Turkey",
];
const result = [];
for (let i = 0; i < countries2.length; i += 2) {
  result.push(countries2[i]);
}
console.log(result);
console.log(countries2);
console.log("==================");

// erstelle ein Object
const userData = {
  name: "John",
  surname: "Doe",
  age: 30,
  city: "Berlin",
  country: "Germany",
  hobbies: {
    sports: {
      football: true,
      basketball: true,
    },
    music: "rock",
  },
};

console.log(userData.name);
userData.test = "test";
userData.test = "groesse";
// dot notation
userData.groesse = 183 / 100;
delete userData.test;
// bracket notation
userData["newKey"] = "newValue";
console.log(userData);

// update user data
userData.name = "Beggo";
userData["surname"] = "Cetin";
userData.hobbies.sports.basketball = false;
userData.hobbies.sports.golf = true;
console.log(userData);
// bracket notation
let property = "name";
console.log(userData[property]); // "John"
property = "surname";
console.log(userData[property]); // "Doe"

// for in loop

for (const property in userData) {
  console.log(property, userData[property]);
}
console.log("==================");
// check max length function
function checkMaxLenght(string, maxLength) {
  let result = undefined;
  if (string.length <= maxLength) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
console.log(checkMaxLenght("Hello", 4));
console.log(checkMaxLenght("Hello", 7));
console.log("==================");

// find average function

function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return (average = sum / array.length);
}

console.log(findAverage([100, 25, 33, 48, 59]));
console.log("==================");

// string.includes() syntax:
// string.includes(searchString, position)
// demo:
console.log("Hello".includes("l"));
console.log("==================");

// string.replace() syntax:
// string.replace(searchString, replaceString)
// demo:
console.log("Hello World".replace("Hello", "World"));

// string.replaceAll() syntax:
// string.replaceAll(searchString, replaceString)
// demo:
console.log("Hello World".replaceAll("World", "Mister"));
function noSpace(x) {
  return x.replaceAll(" ", "");
}

// string.split() syntax:
// string.split(delimiter)
// demo:
console.log("Hello World".split(" "));
console.log("==================");
// string.indexOf() syntax:
// string.indexOf(searchString)
// demo:
console.log("New World, old World".indexOf("World"));
console.log("New World, old World".indexOf("World", +5));
console.log("==================");
// string.repeat() syntax:
// string.repeat(count)
// demo:
console.log("New World, old World. ".repeat(2));
console.log("==================");
// string.toUpperCase() syntax:
// string.toUpperCase()
// demo:
console.log("New World, old World. ".toUpperCase());
console.log("==================");
// string.toLowerCase() syntax:
// string.toLowerCase()
// demo:
console.log("New World, old World. ".toLowerCase());
console.log("==================");

// parseInt() function
// parseInt(string)
// demo:
const stringToNumber = function (str) {
  return parseInt(str);
};
console.log(parseInt("123"));
console.log(parseInt("-7"));
console.log("==================");

// string.endsWith() syntax:
// string.endsWith(suffix)
// demo:
console.log("Hello World".endsWith("World")); // true
console.log("==================");

// TrueCount function
function countTrueValues(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      count++;
    } else if (array1[i] === null || array1[i] === undefined) {
      console.warn("Encountered null or undefined value");
    }
  }
  return count;
}

const array1 = [
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
];
const trueCount = countTrueValues(array1);
console.log(`There are ${trueCount} true values in the array`);
console.log("==================");

// busStops function
let number = function (busStops) {
  let remaingPeople = 0;
  for (let i = 0; i < busStops.length; i++) {
    const [getIn, getOut] = busStops[i];
    remaingPeople += getIn - getOut;
  }
  return remaingPeople;
};

/*
var number = function(busStops){
  var totalPeople = 0;
  for (var i=0; i<busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}
*/

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
); // 5
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
); // 17
console.log("==================");

// callBack function syntax:
// callBack(function, argument1, index, array)
// demo:

const names = ["John", "Beggo", "Cetin"];
names.forEach(function (element, index, array) {
  console.log(element);
  // console.log(index);
  // console.log(array);
});

// boolToWord function
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

// stringEnds function
function stringEnds(str, ending) {
  return str.endsWith(ending);
}

// evenNumbersInArray function
function evenNumbers(array, number) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result.push(array[i]);
    }
  }
  return result.slice(-number);
}
const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(evenNumbers(numbers4, 3));
console.log("==================");

// isValidWalk function
// function isValidWalk(walk) {
//   if (walk.length !== 10) {
//     return false; // Wenn der Spaziergang nicht genau 10 Minuten dauert, gib false zurück
//   }

//   let x = 0; // Verfolge die x-Koordinate der aktuellen Position
//   let y = 0; // Verfolge die y-Koordinate der aktuellen Position

//   for (let direction of walk) {
//     switch (direction) {
//       case 'n':
//         y++; // Bewege einen Block nach Norden (erhöhe die y-Koordinate)
//         break;
//       case 's':
//         y--; // Bewege einen Block nach Süden (verringere die y-Koordinate)
//         break;
//       case 'e':
//         x++; // Bewege einen Block nach Osten (erhöhe die x-Koordinate)
//         break;
//       case 'w':
//         x--; // Bewege einen Block nach Westen (verringere die x-Koordinate)
//         break;
//       default:
//         return false; // Wenn eine ungültige Richtung auftritt, gib false zurück
//     }
//   }

//   // Wenn die endgültige Position der Ausgangsposition (0, 0) entspricht, gib true zurück; ansonsten gib false zurück
//   return x === 0 && y === 0;
// }
// const walk = ['n', 's', 'w', 'e', 'n', 's', 'w', 'e', 'n', 's'];
// console.log(isValidWalk(walk)); // Ausgabe: true

function fakeBin(x) {
  let sum = "";
  for (let i = 0; i < x.length; i++) {
    if (Number(x[i]) < 5) {
      sum += "0";
    } else {
      sum += "1";
    }
  }
  return sum;
}

// find function (find Index of an element in an array)#

function find(array, element) {
  let index = 0;
  for (let item of array) {
    if (item === element) return index;
    index++;
  }
  return "Not found";
}

// const find = (array, element) => array.includes(element) ? array.indexOf(element) : 'Not found';

const array6 = [2, 3, 5, 7, 11];
console.log(find(array6, 7));
console.log(find(array6, 12));
console.log("==================");

// Sum of differences in array function
function sumOfDifferences(arr) {
  if (arr.length <= 1) {
    return 0;
  }

  arr.sort(function (a, b) {
    return b - a;
  });

  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i] - arr[i + 1];
  }
  return sum;
}

// function sumOfDifferences(arr) {
//  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// }

// const sumOfDifferences = arr => arr
//   .sort((a, b) => b - a)
//   .map((a, i) => a - arr[i + 1] || 0)
//   .reduce((a, b) => a + b, 0);

const array7 = [44, 12, 7, 1, 15, 8, 3];
const array8 = [-5, -4, -6, -10, -3, -2, -1];
console.log(sumOfDifferences(array7));
console.log(sumOfDifferences(array8));

console.log("==================");

// merge arrays function - Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
  const duplicates = [...arr1, ...arr2];
  const uniques = [...new Set(duplicates)];
  uniques.sort((a, b) => a - b);
  return uniques;
}

// calculateTotalPoints function
function calculateTotalPoints(games) {
  let totalPoints = 0;

  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    const [team1Score, team2Score] = game.split(":");

    if (team1Score > team2Score) {
      totalPoints += 3;
    } else if (team1Score === team2Score) {
      totalPoints += 1;
    }
  }

  return totalPoints;
}

// findXCoordinates function
function findXCoordinates(array) {
  let xCount = 0;
  let xCoordinates = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === "x") {
        xCount++;
        xCoordinates = [i, j];
      }
      if (xCount > 1) {
        return [];
      }
    }
  }

  return xCoordinates;
}

function converter(mpg) {
  const milesToKilometers = 1.609344;
  const gallonsToLiters = 4.54609188;

  const kpl = (mpg * milesToKilometers) / gallonsToLiters;
  const roundedKpl = kpl.toFixed(2);
  console.log(typeof roundedKpl);

  return parseFloat(roundedKpl);
}

// charCount function
function charCount(word, letter) {
  if (letter.length !== 1) {
    return 0;
  }
  let count = 0;

  for (var i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }

  return count;
}

// whosOnline function
function whosOnline(friends) {
  // Check if the friends array is empty (edge case)
  if (friends.length === 0) {
    return {}; // Return an empty object if there are no friends
  }

  // Create an object to store the status of friends
  const status = {
    online: [], // Array to store online friends
    offline: [], // Array to store offline friends
    away: [], // Array to store friends who are away
  };

  // Iterate over each friend in the friends array
  for (const friend of friends) {
    // Check the status of the friend
    if (friend.status === "online") {
      // Check the last activity of the friend
      if (friend.lastActivity <= 10) {
        status.online.push(friend.username); // Add the friend to the online array
      } else {
        status.away.push(friend.username); // Add the friend to the away array
      }
    } else {
      status.offline.push(friend.username); // Add the friend to the offline array
    }
  }

  // Check if there are no friends online (edge case)
  if (status.online.length === 0) {
    delete status.online; // Remove the online property if there are no friends online
  }

  // Return the status object
  return status;
}

class Person {
  constructor(inputName, inputAge, inputRole) {
    this.name = inputName;
    this.age = inputAge;
    this.role = inputRole;
  }
  greeting() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old and I am a ${this.role}!`
    );
  }
}

const max = new Person("Max", 30, "user");
const berkant = new Person("Berkant", 45, "student");
console.log(max);
console.log(berkant);
console.log(berkant.age);
console.log(berkant.greeting());

// zipStrings function

function zipStrings(str1, str2) {
  let result = "";
  let maxLength = Math.max(str1.length, str2.length);

  for (let i = 0; i < maxLength; i++) {
    // if (i < str1.length) {
    //   result += str1[i];
    // }

    // if (i < str2.length) {
    //   result += str2[i];
    // }

    // if undefined check
    result += (str1[i] || "") + (str2[i] || "");
  }

  return result;
}
console.log(zipStrings("abc", "123")); // "a1b2c3"
console.log(zipStrings("abc", "1")); // "a1bc"
console.log(zipStrings("a", "123")); // "a123"
console.log(zipStrings("", "123")); // "123"
console.log(zipStrings("abc", "")); // "abc"

class SumApp {
  constructor() {
    this.numbers = [];
  }

  addNumber(n) {
    this.numbers.push(n);
  }

  getSum() {
    let sum = 0;
    for (let i = 0; i < this.numbers.length; i++) {
      sum += this.numbers[i];
    }
    return sum;
  }

  reset() {
    this.numbers = [];
  }
}

// fetch api and promises 
let p = fetch("https://api.github.com/users/beggsn");
let p2 = p.then((response) => {
  console.log(response);
  console.log(response.status);
  console.log(response.ok);
  return response.json();
});
p2.then((data) => {
  console.log(data.name);
});


fetch("https://api.github.com/users/beggsn")

  .then((response) => {
    // Abfrage ob die Anfrage erfolgreich war
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // Gibt alle Schlüssel aus

    // Erstellt eine <h1>-Überschrift
    document.body.append(document.createElement("h1"));
    document.querySelector("h1").textContent = data.name;

    // Erstellt ein <div>-Element für den Ort (location)
    const locationDiv = document.createElement("div");
    locationDiv.classList.add("location");
    locationDiv.textContent = data.location;
    document.body.append(locationDiv);

    // Fügt einen Zeilenumbruch <br> hinzu
    document.body.append(document.createElement("br"));

    // Erstellt ein weiteres <div>-Element für die Biografie (bio)
    const bioDiv = document.createElement("div");
    bioDiv.classList.add("bio");
    bioDiv.textContent = data.bio;
    document.body.append(bioDiv);

    document.crea
  })
  .catch((error) => {
    console.error("Error:", error);
  });


