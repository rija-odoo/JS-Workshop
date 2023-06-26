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





Is code mein, kuch functions aur variables hain:
generateRandomNumber function, min aur max dono parameters leti hai aur in dono numbers
ke beech mein ek random integer generate karti hai (inclusive). Iske liye, Math.random() 
ka upyog kiya jata hai jo 0 aur 1 ke beech ek random decimal number generate karta hai, 
usko max aur min ke difference se multiply kiya jata hai, min ko is result mein add kiya jata hai, 
aur phir Math.floor() ka upyog karke number ko nearest integer tak round down kiya jata hai.
checkGuess function submit button par click hone par call hoti hai. Ye function "userGuess" id wale 
input field mein se user dvara enter kiye gaye value ko retrieve karti hai.
Ye check karti hai ki user ke input ka number valid nahi hai ya khali hai. Agar koi bhi condition sahi hai, 
to showMessage function se ek error message display hota hai aur further execution ko roka jata hai.
Agar user ke input ka number valid hai, to parseInt ka upyog karke usko ek integer mein convert kiya jata hai 
aur guess variable mein assign kiya jata hai. Attempts ki sankhya badhate hue.
Fir guess ko targetNumber ke saath compare kiya jata hai. Agar guess target number se chota hai, 
to "Too low! Try again." ka message display hota hai. Agar guess target number se bada hai, 
to "Too high! Try again." ka message display hota hai. Agar guess target number ke barabar hai, 
to "Congratulations! You guessed the number in " + attempts + " attempts." ka message display hota hai aur 
userGuess input field aur submit button ko disable kar diya jata hai.
showMessage function se message ko display karne ke liye message parameter ka upyog kiya jata hai. 
Is function mein, "message" id wale element ki textContent property ko set kiya jata hai.
targetNumber variable