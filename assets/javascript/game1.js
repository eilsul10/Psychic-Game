// Declare variables 

var numberOfRemainingGuesses = 12;
var computerGuessLetter = "";
var randomChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"];

// Initialize game
var wins = 0;
var losses = 0;
var computerGuess = randomChoices[Math.floor(Math.random() * randomChoices.length)];

// Modal set up
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


document.getElementById("showWins").textContent = wins;
document.getElementById("showLosses").textContent = losses;
document.getElementById("guesses-remaining").textContent = numberOfRemainingGuesses;

function newGame() {
    numberOfRemainingGuesses = 12;
    computerGuess = randomChoices[Math.floor(Math.random() * randomChoices.length)];

    document.getElementById("guesses-remaining").textContent = numberOfRemainingGuesses;
    document.getElementById("guessed-letters").textContent = ""
}

// Allow key to register
document.onkeyup = function (event) {
    var userGuess = event.key;
    var regex = /^[a-zA-Z]$/;

    if (!userGuess.match(regex)) {
        return
    }
    
    document.getElementById("guessed-letters").textContent += " " + userGuess;

    if (userGuess === computerGuess) {
        wins++;
        newGame()

    } else if (userGuess.match(regex) && (userGuess != computerGuess)) {
        numberOfRemainingGuesses--

    }

    if (numberOfRemainingGuesses === 0) {
        losses++;
        newGame();
        modal.style.display = "block";

    }

    // Allow JS to link with HTML to show point count
    document.getElementById("guesses-remaining").textContent = numberOfRemainingGuesses;
    document.getElementById("showWins").textContent = wins;
    document.getElementById("showLosses").textContent = losses;
}
