// Iteration 2: Generating two random numbers (0 to 100)
const num1 = Math.floor(Math.random() * 101); // Generating random number 1 (between 0 and 100)
const num2 = Math.floor(Math.random() * 101); // Generating random number 2 (between 0 and 100)

// Iteration 3: Creating variables required to make the game functional
let score = 0;
let time = 21;

// Function to handle game over
function gameover() {
    location.href = "./gameover.html";
    localStorage.setItem("score", score);
}

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let number3 = num1 + num2; // Calculating number3 as the sum of num1 and num2

// Iteration 5: Creating a randomize function to make the game functional
function randomNumbers() {
    return Math.floor(Math.random() * 101); // Generating random number between 0 and 100
}

// Iteration 6: Making the Operators (button) functional
function updateNumber(num1, num2) {
    const operators = ["+", "-", "*", "/", "%"];
    const randomIndex = Math.floor(Math.random() * operators.length);
    const operator = operators[randomIndex];

    let ans;
    switch (operator) {
        case "+":
            ans = num1 + num2;
            break;
        case "-":
            ans = num1 - num2;
            break;
        case "*":
            ans = num1 * num2;
            break;
        case "/":
            ans = Math.floor(num1 / num2);
            break;
        case "%":
            ans = num1 % num2;
            break;
    }
    return ans;
}

function compare(operatorClicked) {
    if (operatorClicked === operator) {
        score++;
        localStorage.setItem("score", score);
        displayNumbers();
        time = 21;
    } else {
        gameover();
    }
}

// Iteration 7: Making Timer functional
function timer() {
    if (time <= 0) {
        gameover();
    } else {
        time--;
        document.getElementById("timer").innerText = time;
    }
}

setInterval(timer, 1000); // Starting the timer

function displayNumbers() {
    const num1 = randomNumbers();
    const num2 = randomNumbers();
    document.getElementById("number1").innerText = num1;
    document.getElementById("number2").innerText = num2;
    operator = updateNumber(num1, num2);
    document.getElementById("number3").innerText = operator;
}

// Adding event listeners to operator buttons
document.getElementById("plus").addEventListener('click', () => compare("+"));
document.getElementById("minus").addEventListener('click', () => compare("-"));
document.getElementById("mul").addEventListener('click', () => compare("*"));
document.getElementById("divide").addEventListener('click', () => compare("/"));
document.getElementById("modulus").addEventListener('click', () => compare("%"));

// Display initial numbers
displayNumbers();
