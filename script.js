"use strict";

var playerOneScore = 0;
var playerTwoScore = 0;


// Get elements
var playerOneEl = document.getElementById("score--0");
var playerTwoEl = document.getElementById("score--1");
var playerOneCurrentEl = document.getElementById('current--0');
var playerTwoCurrentEl = document.getElementById('current--1')
var getDiceEl = document.getElementById("image");
var getBtnClassEl = document.getElementsByClassName('btn');

// Set default values
playerOneEl.innerText = playerOneScore;
playerTwoEl.innerText = playerTwoScore;

// Get dice images when roll dice btn clicked
const getDiceImages = (dice) => {
  getDiceEl.src = "dice-" + dice + ".png";
  updateP1Score(dice);
  //updateP2Score(dice)
};

// Roll dice on btn click
getBtnClassEl[1].addEventListener("click", function () {
  var getDiceNumber = Math.floor(Math.random() * 6 + 1);
  getDiceImages(getDiceNumber);
});

// Update player one score
const updateP1Score = (p1score) => {
  playerOneScore += p1score;
  playerOneCurrentEl.innerText = playerOneScore;
};

// Update player two score
const updateP2Score = (p2score) => {
  playerTwoScore += p2score;
  playerTwoCurrentEl.innerText = playerTwoScore;
};

// Add score when hold btn clicked
getBtnClassEl[2].addEventListener('click', function () {
  playerOneEl.innerText = playerOneScore;
})

