"use strict";
// get slider element
const redSlider = document.querySelector("#red");
const greenSlider = document.querySelector("#green");
const blueSlider = document.querySelector("#blue");
const header = document.querySelector(".header");
const hexCode = document.querySelector(".hex");
const main = document.querySelector("main");

// get eventListeners to the sliders
redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

function updateColor() {
  const redValue = redSlider.value;
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;
  hexCode.textContent = `#${decimalToHex(redValue)}${decimalToHex(greenValue)}${decimalToHex(blueValue)}`;
  header.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue}, 0.25)`;
  main.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

updateColor();

function decimalToHex(value) {
  let hexStr = Number(value).toString(16);
  return hexStr;
}
