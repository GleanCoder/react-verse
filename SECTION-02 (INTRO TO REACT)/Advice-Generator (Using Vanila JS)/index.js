"use strict";
const container = document.querySelector(".container");
const card = document.querySelector(".main-card");
let count = 0;
async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    updateUi(data.slip.advice);
    count += 1;
    counter(count);
  } catch (error) {
    console.log(error.message);
  }
}

function updateUi(data) {
  card.textContent = data;
}
function counter(count) {
  document.querySelector(".counter").textContent = count;
}
const button = document.querySelector(".btn");
button.addEventListener("click", getAdvice);
getAdvice();

// To view it with visual visit my codesandbox code: https://codesandbox.io/p/sandbox/practice-1-pcl2rv
