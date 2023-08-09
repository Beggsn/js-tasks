"use strict";

// Slider-Elemente abrufen
const redSlider = document.querySelector("#red");
const greenSlider = document.querySelector("#green");
const blueSlider = document.querySelector("#blue");

// Elemente abrufen
const header = document.querySelector(".header");
const hexCode = document.querySelector(".hex");
const main = document.querySelector("main");

// Event-Listener zu den Slidern hinzufügen
redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

// Funktion zum Aktualisieren der Farbe
function updateColor() {
  const redValue = redSlider.value;
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;

  const hexValue = `#${decimalToHex(redValue)}${decimalToHex(greenValue)}${decimalToHex(blueValue)}`;
  const rgbValue = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

  hexCode.textContent = hexValue;
  header.style.backgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, 0.25)`;
  main.style.backgroundColor = rgbValue;
}

// Farbe initial aktualisieren
updateColor();

// Hilfsfunktion zur Konvertierung von Dezimal in Hexadezimal
function decimalToHex(value) {
  return value.toString(16);
}


// old version
// function updateColor() {
//   const redValue = redSlider.value;
//   const greenValue = greenSlider.value;
//   const blueValue = blueSlider.value;
//   hexCode.textContent = `#${decimalToHex(redValue)}${decimalToHex(greenValue)}${decimalToHex(blueValue)}`;
//   header.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue}, 0.25)`;
//   main.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
// }

// function decimalToHex(value) {
//   let hexStr = Number(value).toString(16);
//   return hexStr;
// }

