"use strict";

let passwordVisible = true;
const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", function () {
  passwordVisible = !passwordVisible;
  if (passwordVisible) {
    input.type = "text";
  } else {
    input.type = "password";
  }
});
