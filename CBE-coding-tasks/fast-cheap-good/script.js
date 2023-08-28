"use strict";

const checkboxes = document.querySelectorAll('input[type="checkbox"]'); 
const maxChecked = 2; 
let checkedBoxes = 0;
let lastChecked;

checkboxes.forEach(function (box) {
  box.addEventListener("change", function () {
    if (box.checked === true) {
      checkedBoxes++;
    } else {
      checkedBoxes--;
    }
    if (checkedBoxes > maxChecked) {
      lastChecked.checked = false;
    }
    lastChecked = box;
  });
});
