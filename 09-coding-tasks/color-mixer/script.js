"use strict";

document.addEventListener('DOMContentLoaded', function() {
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

    // Konvertierte Hexadezimalwerte im localStorage speichern
    localStorage.setItem('redHexValue', redValue);
    localStorage.setItem('greenHexValue', greenValue);
    localStorage.setItem('blueHexValue', blueValue);
  }

  // Hilfsfunktion zur Konvertierung von Dezimal in Hexadezimal
  function decimalToHex(value) {
    const hexValue = parseInt(value).toString(16).padStart(2, '0');
    return hexValue;
  }

  // Hexwert aus dem localStorage abrufen und im Header anzeigen
  const savedRedValue = localStorage.getItem('redHexValue');
  const savedGreenValue = localStorage.getItem('greenHexValue');
  const savedBlueValue = localStorage.getItem('blueHexValue');

  if (savedRedValue && savedGreenValue && savedBlueValue) {
    redSlider.value = savedRedValue;
    greenSlider.value = savedGreenValue;
    blueSlider.value = savedBlueValue;

    // Farbe aktualisieren
    updateColor();
  }
});
