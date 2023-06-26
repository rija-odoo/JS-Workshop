function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function For Gussing Number
function checkGuess() {
    var userInput = document.getElementById("userGuess").value;
    if (isNaN(userInput) || userInput === "") {
        showMessage("Invalid input. Please enter a valid number.");
        return;
    }
    var guess = parseInt(userInput);
    attempts++;
    if (guess < targetNumber) {
        showMessage("Too low! Try again.");
    } else if (guess > targetNumber) {
        showMessage("Too high! Try again.");
    } else {
        showMessage("Congratulations! You guessed the number in " + attempts + " attempts.");
        document.getElementById("userGuess").disabled = true;
        document.getElementsByTagName("button")[0].disabled = true;
    }
}

// Print Messaeg
function showMessage(message) {
    document.getElementById("message").textContent = message;
}

var targetNumber = generateRandomNumber(1, 100);
var attempts = 0;
