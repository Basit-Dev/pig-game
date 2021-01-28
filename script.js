"use strict";

var p1TotalScore = 0;
var p2TotalScore = 0;
var p1CurrentScore = 0;
var p2CurrentScore = 0;


// Get elements
var playerOneEl = document.getElementById("score--0");
var playerTwoEl = document.getElementById("score--1");
var playerOneCurrentEl = document.getElementById('current--0');
var playerTwoCurrentEl = document.getElementById('current--1')
var getDiceEl = document.getElementById("image");
var getBtnClassEl = document.getElementsByClassName('btn');
var getActivePlayerEl = document.getElementsByClassName('player');

// Set default values
playerOneEl.innerText = p1TotalScore;
playerTwoEl.innerText = p2TotalScore;

// Get dice images when roll dice btn clicked
const getDiceImages = (dice) => {
  getDiceEl.src = "dice-" + dice + ".png";
  if (dice == 1) {
    switchPlayer();
    diceRollsOne();
  } else {
    updateP1Score(dice);
  }
};

// Roll dice on btn click
getBtnClassEl[1].addEventListener("click", function () {
  var getDiceNumber = Math.floor(Math.random() * 6 + 1);
  getDiceImages(getDiceNumber);
});

// Update player one score
const updateP1Score = (p1score) => {
  p1CurrentScore += p1score;
  playerOneCurrentEl.innerText = p1CurrentScore;
};

// Update player two score
const updateP2Score = (p2score) => {
  p2TotalScore += p2score;
  playerTwoCurrentEl.innerText = p2TotalScore;
};

// Add score when hold btn clicked
getBtnClassEl[2].addEventListener('click', function () {
  p1TotalScore += p1CurrentScore;
  playerOneEl.innerText = p1TotalScore;
  playerOneCurrentEl.innerText = 0;
  switchPlayer()

});

// Switch player
const switchPlayer = () => {
getActivePlayerEl[0].classList.toggle('player--active');
getActivePlayerEl[1].classList.toggle('player--active');
}

// Reset scores when dice rolls one 
const diceRollsOne = () => {
  p1CurrentScore = 0;
  playerOneCurrentEl.innerText = p1CurrentScore;
  p1TotalScore = 0;
  playerOneEl.innerText = p1TotalScore;
} 