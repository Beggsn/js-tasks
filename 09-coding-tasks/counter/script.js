"use strict";

let counter = 0;
const btn = document.querySelector("button");
const main = document.querySelector("main");

// click event 
main.addEventListener("click", function () {
    counter++;
    document.getElementById("counter").innerText = counter;

    // Change the background color
    if (counter % 100 === 0) {
        main.style.backgroundImage = "linear-gradient(gold, gold)";
    } else {
        const colorPercentage = (counter % 100) / 100;
        const colorStop = Math.floor(colorPercentage * 100);
        main.style.backgroundImage = `linear-gradient(to right, gold ${colorStop}%, transparent ${colorStop}%)`;
    }
});

// space or enter 
document.addEventListener("keydown", function (event) {
    if (event.code === 'Space' || event.code === 'Enter') {
        counter++;
        document.getElementById("counter").innerText = counter;

        // Change the background color
        if (counter % 100 === 0) {
            main.style.backgroundImage = "linear-gradient(gold, gold)";
        } else {
            const colorPercentage = (counter % 100) / 100;
            const colorStop = Math.floor(colorPercentage * 100);
            main.style.backgroundImage = `linear-gradient(to right, gold ${colorStop}%, transparent ${colorStop}%)`;
        }
    }
});

// reset button

btn.addEventListener("click", function () {
    counter = 0;
    document.getElementById("counter").innerText = counter;
    main.style.backgroundImage = "linear-gradient(white, white)";
});

// mousewheel event
document.addEventListener("wheel", function (event) {
    if (event.deltaY < 0) {
        counter++;
    } else if (event.deltaY > 0 && counter > 0) {
        counter--;
    }
    document.getElementById("counter").innerText = counter;

    // Change the background color
    if (counter % 100 === 0) {
        main.style.backgroundImage = "linear-gradient(gold, gold)";
    } else {
        const colorPercentage = (counter % 100) / 100;
        const colorStop = Math.floor(colorPercentage * 100);
        main.style.backgroundImage = `linear-gradient(to right, gold ${colorStop}%, transparent ${colorStop}%)`;
    }
});