// Next:
// Nummer im Display soll kurz aufblinken, wenn ich sie nochmal drücke
// bei der mobilen Version soll der Button kurz eine andere Farbe annehmen beim Tippen
// Fix bug with decimal point: 9 - 6. = 
//'1931.300000000 floatet immer noch über - und man kann die 0en wegkürzen

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') return add(a, b);
    if (operator === '-') return subtract(a, b);
    if (operator === '*') return multiply(a, b);
    if (operator === '/') return divide(a, b);
}

function storeNumber(number) {

    // If there's a 0 in the display you can't add another 0
    if (display.textContent === '0' && number === 0) return;

    // You can't have more than one decimal point in one number
    if (numberArray.includes('.') && number === '.') return;
    
    // You can't type in more than 11 digits including decimal point
    if (numberArray.length < 11) {           
        
        // Display the entered numbers
        numberArray.push(number);
        currentNumber = numberArray.join('');
        display.textContent = currentNumber;

        // Show an error message for division by 0
        // Start the operation when there was already an operator entered
        if (operator === '/' && numberArray[0] === 0) {
            showErrorMessage();
        } else if (operator !== undefined) {
            currentNumber = operate(operator, +firstNumber,+currentNumber);
        }        
    }
}

function showErrorMessage() {
    display.textContent = 'Sorry, no division by 0';
    display.style.fontSize = '24px';
    display.style.display = 'flex';
    display.style.alignItems = 'center';
}

function deleteLastDigit() {
    numberArray.pop();
    currentNumber = numberArray.join('');
    display.textContent = currentNumber;

    if (operator !== undefined) {
        currentNumber = operate(operator, +firstNumber,+currentNumber);
    }
}

function saveResult() {
    firstNumber = currentNumber;
    display.textContent = firstNumber;
    numberArray = [];
}

function storeAdd() {
    operator = '+';
    saveResult();
}

function storeSubtract() {
    operator = '-';
    saveResult();
}

function storeMultiply() {
    operator = '*';
    saveResult();;
}

function storeDivide() {
    operator = '/';
    saveResult();
}

function showResult() {

    if (operator === '/' && numberArray[0] === 0) {
        // Error message for division by 0
        showErrorMessage();
    } else if (currentNumber % 1 !== 0) {
        // Shorten floating point number so that it doesn't overflow the display

        // Ist doof, weil dann 8349.9987 auch overfloated
        // currentNumber = currentNumber.toFixed(9);
        // display.textContent = currentNumber;
        // numberArray = [];
    } else {
        
        // Shorten integers so they doesn't overflow the display
        numberArray = [];
        numberArray.push(currentNumber);
        let fullArray = [];
        let roundedArray = [];
        fullArray = numberArray[0].toString().split('').map(Number);

        if (fullArray.length > 11 && fullArray[11] > 4) {

            if (fullArray[10] === 9 && fullArray[11] > 4) {
                fullArray[10] === 0;
                fullArray[9]++
            } else {
                fullArray[10]++;
            }
        }

        roundedArray = fullArray.slice(0, 11);
        currentNumber = roundedArray.join('');
        display.textContent = currentNumber;
        numberArray = [];
    }

    
}

function clearDisplay() {
    display.textContent = '0';
    display.style.fontSize = '42px';
    display.style.display = '';
    display.style.textAlign = '';
    numberArray = [];
    currentNumber = 0;
    operator = undefined;
    firstNumber = undefined;
}

const button0 = document.getElementById('number0');
const button1 = document.getElementById('number1');
const button2 = document.getElementById('number2');
const button3 = document.getElementById('number3');
const button4 = document.getElementById('number4');
const button5 = document.getElementById('number5');
const button6 = document.getElementById('number6');
const button7 = document.getElementById('number7');
const button8 = document.getElementById('number8');
const button9 = document.getElementById('number9');
const buttonDecimal = document.getElementById('decimal');
const buttonAdd = document.getElementById('add');
const buttonSubtract = document.getElementById('subtract');
const buttonMultiply = document.getElementById('multiply');
const buttonDivide = document.getElementById('divide');
const buttonEquals = document.getElementById('equals');
const buttonClear = document.getElementById('clear');
const buttonBackspace = document.getElementById('backspace');
const display = document.getElementById('display');

let numberArray = [];
let currentNumber;
let operator;
let firstNumber;

button0.addEventListener('click', () => storeNumber(0));
button1.addEventListener('click', () => storeNumber(1));
button2.addEventListener('click', () => storeNumber(2));
button3.addEventListener('click', () => storeNumber(3));
button4.addEventListener('click', () => storeNumber(4));
button5.addEventListener('click', () => storeNumber(5));
button6.addEventListener('click', () => storeNumber(6));
button7.addEventListener('click', () => storeNumber(7));
button8.addEventListener('click', () => storeNumber(8));
button9.addEventListener('click', () => storeNumber(9));
buttonDecimal.addEventListener('click', () => storeNumber('.'));
buttonAdd.addEventListener('click', storeAdd);
buttonSubtract.addEventListener('click', storeSubtract);
buttonMultiply.addEventListener('click', storeMultiply);
buttonDivide.addEventListener('click', storeDivide);
buttonEquals.addEventListener('click', showResult);
buttonClear.addEventListener('click', clearDisplay);
buttonBackspace.addEventListener('click', deleteLastDigit);