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
    if (operator === "+") return add(a, b);
    if (operator === "-") return subtract(a, b);
    if (operator === "*") return multiply(a, b);
    if (operator === "/") return divide(a, b);
}

let firstNumber;
let operator;
let secondNumber;


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
const display = document.getElementById('display');

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

// window.addEventListener('load', () => display.textContent = '000')

let displayValue = 0;

function displayNumber(num) {

    if (display === '') {
        display.textContent = num;
        displayValue = num;
    } else {
        display.textContent += num;
        displayValue = display.textContent;
    }
     
    return displayValue;
}


