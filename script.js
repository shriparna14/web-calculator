let display = document.querySelector('#display');
let currentInput = "";


const clickSound = new Audio('click.mp3.wav')
function playSound(){
    clickSound.currentTime = 0; // Reset sound to start
    clickSound.play();
}


// Append number when a number button is clicked
function appendNumber(num) {
    playSound();
    if (display.innerHTML === '0' || currentInput === 'Error') {
        currentInput = num;
    } else {
        currentInput += num;
    }
    updateDisplay();
}

function appendOperator(op) {
    playSound();
    //.slice(-1) gets the last character of the string
    const lastchar = currentInput.slice(-1);
    if ("+-*/%".includes(lastchar)) {
        // If the last character is an operator, replace it with the new operator
        currentInput = currentInput.slice(0, -1) + op;
    } else {
        currentInput += op;
    }
    updateDisplay();
}

function clearDisplay() {
    playSound();
    currentInput = '';
    updateDisplay("0"); // show 0 on screen after clearing
}

function backspace() {
    playSound();
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || "0"); // show 0 if input is empty
}

function calculate() {
    playSound();
    try {
        // Use eval to calculate the result of the expression
        // eval is JavaScript's built-in function to evaluate a string as code
        const result = eval(currentInput);
        currentInput = result.toString();
        updateDisplay();
    } catch (e) {
        updateDisplay("Error");
        currentInput = 'Error';
    }
}

function updateDisplay(text) {
    display.innerText = text || currentInput;
}
