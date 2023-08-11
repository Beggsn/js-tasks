"use strict";

let counter = parseInt(localStorage.getItem('counterValue')) || 0;
const btn = document.querySelector("button");
const main = document.querySelector("main");

// Initial counter display
document.getElementById("counter").innerText = counter;

// Update background color on page load
if (counter % 100 === 0) {
    main.style.backgroundImage = "linear-gradient(gold, gold)";
} else {
    const colorPercentage = (counter % 100) / 100;
    const colorStop = Math.floor(colorPercentage * 100);
    main.style.backgroundImage = `linear-gradient(to right, gold ${colorStop}%, transparent ${colorStop}%)`;
}

// click event 
main.addEventListener("click", function () {
    counter++;
    document.getElementById("counter").innerText = counter;

    // Update background color
    if (counter % 100 === 0) {
        main.style.backgroundImage = "linear-gradient(gold, gold)";
    } else {
        const colorPercentage = (counter % 100) / 100;
        const colorStop = Math.floor(colorPercentage * 100);
        main.style.backgroundImage = `linear-gradient(to right, gold ${colorStop}%, transparent ${colorStop}%)`;
    }

    // Save counter value to localStorage
    localStorage.setItem('counterValue', counter);
});

// space or enter 
document.addEventListener("keydown", function (event) {
    if (event.code === 'Space' || event.code === 'Enter') {
        counter++;
        document.getElementById("counter").innerText = counter;

        // Update background color
        if (counter % 100 === 0) {
            main.style.backgroundImage = "linear-gradient(gold, gold)";
        } else {
            const colorPercentage = (counter % 100) / 100;
            const colorStop = Math.floor(colorPercentage * 100);
            main.style.backgroundImage = `linear-gradient(to right, gold ${colorStop}%, transparent ${colorStop}%)`;
        }

        // Save counter value to localStorage
        localStorage.setItem('counterValue', counter);
    }
});

// reset button
btn.addEventListener("click", function () {
    counter = 0;
    document.getElementById("counter").innerText = counter;
    main.style.backgroundImage = "linear-gradient(white, white)";

    // Save counter value to localStorage
    localStorage.setItem('counterValue', counter);
});

// mousewheel event
document.addEventListener("wheel", function (event) {
    if (event.deltaY < 0) {
        counter++;
    } else if (event.deltaY > 0 && counter > 0) {
        counter--;
    }
    document.getElementById("counter").innerText = counter;

    // Update background color
    if (counter % 100 === 0) {
        main.style.backgroundImage = "linear-gradient(gold, gold)";
    } else {
        const colorPercentage = (counter % 100) / 100;
        const colorStop = Math.floor(colorPercentage * 100);
        main.style.backgroundImage = `linear-gradient(to right, gold ${colorStop}%, transparent ${colorStop}%)`;
    }

    // Save counter value to localStorage
    localStorage.setItem('counterValue', counter);
});

