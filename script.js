"use strict";

var p1TotalScore = 0;
var p2TotalScore = 0;
var p1CurrentScore = 0;
var p2CurrentScore = 0;

// Get elements
var playerOneEl = document.getElementById("score--0");
var playerTwoEl = document.getElementById("score--1");
var playerOneCurrentEl = document.getElementById("current--0");
var playerTwoCurrentEl = document.getElementById("current--1");
var getDiceEl = document.getElementById("image");
var getBtnClassEl = document.getElementsByClassName("btn");
var getActivePlayerEl = document.getElementsByClassName("player");

// Set default values
playerOneEl.innerText = p1TotalScore;
playerTwoEl.innerText = p2TotalScore;

// Get dice images when roll dice btn clicked
const getDiceImages = (dice) => {
  getDiceEl.src = "dice-" + dice + ".png";
  togglePlayers(dice);
};

// Roll dice on btn click
getBtnClassEl[1].addEventListener("click", function () {
  var getDiceNumber = Math.floor(Math.random() * 6 + 1);
  getDiceImages(getDiceNumber);
});

// // Toggle players
const togglePlayers = (dice) => {
  if (getActivePlayerEl[0].classList.contains("player--active")) {
    updateP1Score(dice);
  } else {
    updateP2Score(dice);
  }
};

const updateP1Score = (number) => {
  if (number == 1) {
    diceRollsOne(playerOneCurrentEl, playerOneEl);
    p1TotalScore = 0;
    p1CurrentScore = 0;
    console.log("Dice is " + number);
  } else {
    p1CurrentScore += number;
    playerOneCurrentEl.innerText = p1CurrentScore;
    console.log(p1CurrentScore);
  }
  getBtnClassEl[2].addEventListener("click", function () {
    p1TotalScore += p1CurrentScore;
    playerOneEl.innerText = p1TotalScore;

    console.log("player One active, score: " + p1TotalScore);
    getActivePlayerEl[1].classList.add("player--active");
    getActivePlayerEl[0].classList.remove("player--active");

    p1CurrentScore = 0;
    playerOneCurrentEl.innerText = p1CurrentScore;
    console.log("player One current, score: " + p1CurrentScore);
    userWins(p1TotalScore, getActivePlayerEl[0]);
  });
};

// Update player two score
const updateP2Score = (number) => {
  if (number == 1) {
    diceRollsOne(playerTwoCurrentEl, playerTwoEl);
    p2TotalScore = 0;
    p2CurrentScore = 0;
    console.log("Dice is " + number);
  } else {
    p2CurrentScore += number;
    playerTwoCurrentEl.innerText = p2CurrentScore;
  }
  getBtnClassEl[2].addEventListener("click", function () {
    p2TotalScore += p2CurrentScore;
    playerTwoEl.innerText = p2TotalScore;

    getActivePlayerEl[0].classList.add("player--active");
    getActivePlayerEl[1].classList.remove("player--active");

    p2CurrentScore = 0;
    playerTwoCurrentEl.innerText = p2CurrentScore;
    userWins(p2TotalScore, getActivePlayerEl[1]);
  });
};

// Default loading for hold btn toggle
getBtnClassEl[2].addEventListener("click", function () {
  if (p1TotalScore == 0 && p2TotalScore == 0) {
    switchPlayer();
  }
});

// Switch player
const switchPlayer = () => {
  getActivePlayerEl[0].classList.toggle("player--active");
  getActivePlayerEl[1].classList.toggle("player--active");
  console.log("Swich");
};

// Reset scores when dice rolls one
const diceRollsOne = (pcEl, pEl) => {
  pcEl.innerText = 0;
  pEl.innerText = 0;
  switchPlayer();
};

// User wins
const userWins = (totalScore, winner) => {
  if (totalScore >= 100) {
    winner.classList.add("player--winner");
  }
};

// Reset game
getBtnClassEl[0].addEventListener('click', function() {
  getActivePlayerEl[0].classList.add("player--active");
  getActivePlayerEl[1].classList.remove("player--active");
  p1TotalScore = 0;
  p2TotalScore = 0;
  playerOneEl.innerText = p1CurrentScore;
  playerTwoEl.innerText = p2CurrentScore;
  getDiceEl.src = "dice-5.png";
  
})