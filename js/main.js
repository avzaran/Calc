function plus(numFirstInput, numSecondInput) {
    return numFirstInput + numSecondInput;
}
function minus(numFirstInput, numSecondInput) {
    return numFirstInput - numSecondInput;
}
function multiplication(numFirstInput, numSecondInput) {
    return numFirstInput * numSecondInput;
}
function division(numFirstInput, numSecondInput) {
    return numFirstInput / numSecondInput;
}

let currentValue = 0;
let pendingValue = null;
let operation = null;
let currentInput = '';
let shouldResetInput = false;

const numberButtons = document.querySelectorAll(".buttons button");
const operatorButtons = document.querySelectorAll(".operators button");
const displayText = document.querySelector('.display');
const equallyButton = document.querySelector(".equally");
const clearButton = document.querySelector(".clear");

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (shouldResetInput) {
            currentInput = '';
            shouldResetInput = false;
        }
        currentInput += button.textContent;
        displayText.textContent = currentInput;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '') return;
        
        const inputValue = Number(currentInput);
        
        if (pendingValue === null) {
            pendingValue = inputValue;
        } else if (operation) {
            pendingValue = operate(pendingValue, operation, inputValue);
            displayText.textContent = pendingValue;
        }
        
        operation = button.textContent;
        shouldResetInput = true;
    });
});

equallyButton.addEventListener('click', () => {
    if (currentInput === ''  operation === null  pendingValue === null) return;
    
    const inputValue = Number(currentInput);
    const result = operate(pendingValue, operation, inputValue);
    
    displayText.textContent = result;
    pendingValue = result;
    operation = null;
    shouldResetInput = true;
});

clearButton.addEventListener('click', () => {
    currentValue = 0;
    pendingValue = null;
    operation = null;
    currentInput = '';
    displayText.textContent = '0';
});

function operate(numFirstInput, operatorInput, numSecondInput) {
    switch (operatorInput) {
        case "+":
            return plus(numFirstInput, numSecondInput);
        case "-":
            return minus(numFirstInput, numSecondInput);
        case "*":
            return multiplication(numFirstInput, numSecondInput);
        case "/":
            return division(numFirstInput, numSecondInput);
        default:
            return "error";
    }
}