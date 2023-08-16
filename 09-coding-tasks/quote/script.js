"use strict";

// DOM Elemente selektieren
const btn = document.querySelector("button");
const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");

// Überprüfung, ob Quote-Text und Autor im localStorage vorhanden sind
if (localStorage.getItem("quote")) {
  quoteText.textContent = localStorage.getItem("quote");
}
if (localStorage.getItem("author")) {
  quoteAuthor.textContent = `- ${localStorage.getItem("author")}`;
}

btn.addEventListener("click", function () {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // Aktualisieren des Textes und des Autors mit abgerufenen Werten
      quoteText.textContent = data.quote;
      quoteAuthor.textContent = `- ${data.author}`;

      // Speichern der Daten im localStorage
      localStorage.setItem("quote", data.quote);
      localStorage.setItem("author", data.author);

    })
    // Fehlerbehandlung 
    .catch((error) => {
      console.log(error);
    });
});
