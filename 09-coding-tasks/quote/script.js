"use strict";

const btn = document.querySelector("button");
const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");

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
      quoteText.textContent = data.quote;
      quoteAuthor.textContent = `- ${data.author}`;

      localStorage.setItem("quote", data.quote);
      localStorage.setItem("author", data.author);

    })
    .catch((error) => {
      console.log(error);
    });
});
