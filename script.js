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

function displayNumber(number) {

    if (display.textContent === '0') {
        display.textContent = '';
        display.textContent += number;
    } else {
        display.textContent += number;
    }
    
    displayValue.push(number);
    currentNumber = parseFloat(displayValue.join(''));
    if (operator === undefined) {
        firstNumber = currentNumber;
    } else {
        display.textContent = '';
        display.textContent = currentNumber;
        secondNumber = currentNumber;
    }
}

function storeAdd() {
    operator = '+';
    displayValue.length = 0;
}

function storeSubtract() {
    operator = '-';
    displayValue.length = 0;
}

function storeMultiply() {
    operator = '*';
    displayValue.length = 0;
}

function storeDivide() {
    operator = '/';
    displayValue.length = 0;
}

function showResult() {
    if (operator && secondNumber) {
        const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        display.textContent = result;
        displayValue.length = 0;
        displayValue.push(result);
        currentNumber = result;
        firstNumber = result;
        operator = undefined;
        secondNumber = undefined;
    }
}

function clearDisplay() {
    display.textContent = '0';
    displayValue.length = 0;
    currentNumber = 0;
    operator = undefined;
    firstNumber = undefined;
    secondNumber = undefined;
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
const display = document.getElementById('display');

const displayValue = [];
let operator;
let firstNumber;
let secondNumber;
let currentNumber = 0;

button0.addEventListener('click', () => displayNumber(0));
button1.addEventListener('click', () => displayNumber(1));
button2.addEventListener('click', () => displayNumber(2));
button3.addEventListener('click', () => displayNumber(3));
button4.addEventListener('click', () => displayNumber(4));
button5.addEventListener('click', () => displayNumber(5));
button6.addEventListener('click', () => displayNumber(6));
button7.addEventListener('click', () => displayNumber(7));
button8.addEventListener('click', () => displayNumber(8));
button9.addEventListener('click', () => displayNumber(9));
buttonAdd.addEventListener('click', storeAdd);
buttonSubtract.addEventListener('click', storeSubtract);
buttonMultiply.addEventListener('click', storeMultiply);
buttonDivide.addEventListener('click', storeDivide);
buttonEquals.addEventListener('click', showResult);
buttonClear.addEventListener('click', clearDisplay);