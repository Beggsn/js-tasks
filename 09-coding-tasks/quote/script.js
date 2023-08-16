"use strict";

const btn = document.querySelector("button");
const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");

btn.addEventListener("click", function () {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => response.json())
    .then((data) => {
    //   console.log(data);
      quoteText.textContent = data.quote;
      quoteAuthor.textContent = `- ${data.author}`;
    })
    .catch((error) => {
      console.log(error);
    });
});
