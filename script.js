"use strict";

// Get elements
var playerOneEl = document.getElementById("score--0");
var playerTwoEl = document.getElementById("score--1");
var getDiceEl = document.getElementById("image");

// Set values
var playerOneScore = (playerOneEl.innerText = 0);
var playerTwoScore = (playerTwoEl.innerText = 0);

// Get dice images on roll dice click
const getDiceImages = (dice) => {
  getDiceEl.src = "dice-" + dice + ".png";
};

// Roll dice
document.addEventListener("click", function () {
  var getRandomNumber = Math.floor(Math.random() * 6 + 1);
  getDiceImages(getRandomNumber);
});
