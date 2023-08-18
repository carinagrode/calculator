// Next:
// Nummer soll kurz aufblinken, wenn ich sie nochmal drücke
// Nummer darf nicht zu lang werden
// Float numbers

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
    numberArray.push(number);
    currentNumber = numberArray.join('');
    display.textContent = currentNumber;

    if (operator !== undefined) {
        currentNumber = operate(operator, +firstNumber,+currentNumber);
    }
}

function deleteLastDigit() {
    numberArray.pop();
    newNumberArray = numberArray;
    currentNumber = newNumberArray.join('');
    display.textContent = currentNumber;
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
    display.textContent = currentNumber;
}

function clearDisplay() {
    display.textContent = '0';
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
const buttonAdd = document.getElementById('add');
const buttonSubtract = document.getElementById('subtract');
const buttonMultiply = document.getElementById('multiply');
const buttonDivide = document.getElementById('divide');
const buttonEquals = document.getElementById('equals');
const buttonClear = document.getElementById('clear');
const buttonBackspace = document.getElementById('backspace');
const display = document.getElementById('display');

let numberArray = [];
let newNumberArray = [];
let currentNumber;
let operator;
let firstNumber;
let result;

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
buttonAdd.addEventListener('click', storeAdd);
buttonSubtract.addEventListener('click', storeSubtract);
buttonMultiply.addEventListener('click', storeMultiply);
buttonDivide.addEventListener('click', storeDivide);
buttonEquals.addEventListener('click', showResult);
buttonClear.addEventListener('click', clearDisplay);
buttonBackspace.addEventListener('click', deleteLastDigit);