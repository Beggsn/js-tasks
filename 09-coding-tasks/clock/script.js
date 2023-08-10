"use strict";

function updateDigitalClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const digitalClockHours = document.querySelector(".digital-clock-hours");
  const digitalClockMinutes = document.querySelector(".digital-clock-minutes");
  const digitalClockSeconds = document.querySelector(".digital-clock-seconds");

  digitalClockHours.textContent = hours.toString().padStart(2, "0");
  digitalClockMinutes.textContent = minutes.toString().padStart(2, "0");
  digitalClockSeconds.textContent = seconds.toString().padStart(2, "0");

  console.log(digitalClockHours, digitalClockMinutes, digitalClockSeconds);
}

function updateClockDots() {
  const digitalClockDots = document.querySelectorAll(".digital-clock-dots");
  digitalClockDots.forEach((dot) => {
    dot.classList.toggle("digital-clock-dots-hidden");
  });
}
// function updateClockDots() {
//     const digitalClockDots = document.getElementsByClassName("digital-clock-dots");
//     for (let i = 0; i < digitalClockDots.length; i++) {
//         digitalClockDots[i].classList.toggle("digital-clock-dots-hidden");
//     }
// }

function updateAnalogClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const analogClock = document.querySelector(".analog-clock");

  analogClock.style.setProperty("--hours", hours * 30 + "deg");
  analogClock.style.setProperty("--minutes", minutes * 6 + "deg");
  analogClock.style.setProperty("--seconds", seconds * 6 + "deg");
}

// Update the digital clock values and dots every second
setInterval(updateDigitalClock, 1000);
setInterval(updateClockDots, 1000);
setInterval(updateAnalogClock, 1000);
