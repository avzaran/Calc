function plus (numFirstInput, numSecondInput){
    return numFirstInput + numSecondInput;
}
function minus (numFirstInput, numSecondInput){
    return numFirstInput - numSecondInput;
}
function multiplication (numFirstInput, numSecondInput){
    return numFirstInput * numSecondInput;
}

function division (numFirstInput, numSecondInput){
    return numFirstInput / numSecondInput;
}


let numFirstInput = null;
let numSecondInput = null;
let operatorInput = null;
let currentInput = '';

const numberButtons = document.querySelectorAll(".buttons button");
const operatorButtons = document.querySelectorAll(".operators button");
const displayText = document.querySelector('.display');
const equallyButton = document.querySelector(".equally");
const clearButton = document.querySelector(".clear"); 


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        displayText.textContent = currentInput;
        
        if (!operatorInput) {
            numFirstInput = Number(currentInput);
        } else {
            numSecondInput = Number(currentInput);
        }
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operatorInput = button.textContent;
        currentInput = ''; 
        displayText.textContent += `${operatorInput}`;
    });
});


equallyButton.addEventListener('click', () => {
    if ((numFirstInput !== null) && (operatorInput && numSecondInput !== null)) {
        const result = operate(numFirstInput, operatorInput, numSecondInput);
        displayText.textContent = result;
        
        numFirstInput = result;
        numSecondInput = null;
        operatorInput = null;
        currentInput = '';
    }
});

clearButton.addEventListener('click', () => {
    numFirstInput = null;
    numSecondInput = null;
    operatorInput = null;
    currentInput = '';
    displayText.textContent = '0';
});

function operate (numFirstInput, operatorInput, numSecondInput){
    if (operatorInput === "+") {
        return +plus(numFirstInput, numSecondInput);
    }
    else if (operatorInput === "-"){
        return +minus (numFirstInput, numSecondInput);
    }
    else if (operatorInput === "*"){
        return +multiplication (numFirstInput, numSecondInput);
    }
    else if (operatorInput === "/"){
        return +division (numFirstInput, numSecondInput);
    }
    else {
        return "error"
    }
}

