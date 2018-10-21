// Declare variables 

var numberOfRemainingGuesses = 12;
var computerGuessLetter = "";
var randomChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"];

// Initialize game
var wins=0;
var losses=0;
var computerGuess = randomChoices[Math.floor(Math.random() * randomChoices.length)];

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

    document.getElementById("guessed-letters").textContent += " " + userGuess;

    if (userGuess === computerGuess) {
            wins++;
            newGame()
    } else if (userGuess != computerGuess) {
        numberOfRemainingGuesses--
    }   
    
    if (numberOfRemainingGuesses == 0) {
        losses++;
        newGame()
        alert("You have lost. Please try again.");
    }

    // Allow JS to link with HTML to show point count
    document.getElementById("guesses-remaining").textContent = numberOfRemainingGuesses;
    document.getElementById("showWins").textContent = wins;
    document.getElementById("showLosses").textContent = losses;
}
