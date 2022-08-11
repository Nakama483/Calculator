function addition(x, y) {
    return Math.round((x + y) * 100000000) / 100000000;
};

function subtraction(x, y) {
    return Math.round((x - y) * 100000000) / 100000000;
};

function multiplication(x, y) {
    return Math.round((x * y) * 100000000) / 100000000;
};

function division(x, y) {
    return (x === 0 && y === 0) ? 'Error' : Math.round((x / y) * 100000000) / 100000000;
};

function operate(x, operator, y){
    switch (true) {
        case operator === '+':
            return addition(x, y);
        case operator === '-':
            return subtraction(x, y);
        case operator === 'x':
            return multiplication(x, y);
        case operator === '/':
            return division(x, y);
    }
};

const display = document.getElementById('display');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const decimal = document.getElementById('decimal');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.getElementById('equals');
const negativeNumber = document.getElementById('negative');
const clearEntry = document.getElementById("backspace");
const reset = document.getElementById("allclear")

let x;
let y;
let operator;
let result; 

function displayInt(num) {
    if (display.textContent === '0'){
        display.textContent = num;
    } else if (result !== undefined){
        result = undefined;
        display.textContent = num;
    } else {
        display.textContent += num;
    }
};

function displayResult() {
    let displayArray = display.textContent.split(' ');
    if (displayArray.length === 1){
        display.textContent = +displayArray.join('')
    } else {
        if (displayArray[displayArray.length - 1] === ''){
            y = 'NaN';
        }else {
            y = displayArray[displayArray.length - 1];
            display.textContent = operate(+x, operator, +y);
            result = display.textContent;
        }    
    }    
};

function operateOnResult(symbol) {
    if (display.textContent === 'Error'){
        x = 0;
        operator = symbol;
        display.textContent = 0 + ` ${symbol} `;
        result = undefined;
    } else if (display.textContent < 0) {
        x = +display.textContent;
        operator = symbol;
        display.textContent += ` ${symbol} `;
    } else if (/[+\-x/]/.test(display.textContent)){
        displayResult();
        x = result;
        operator = symbol;
        if (y === 'NaN'){
            display.textContent += ''
        } else {
            display.textContent += ` ${symbol} `;
            result = undefined;
        }
    } else if (result !== undefined) { 
        x = result;
        operator = symbol;
        display.textContent += ` ${symbol} `;
        result = undefined;
    } else {
        x = +display.textContent;
        operator = symbol;
        display.textContent += ` ${symbol} `;
    }
};


function convertToNegative() {
    let displayArray = display.textContent.split(' ');
    if (displayArray.length === 1){
        x = 0 - displayArray[displayArray.length - 1];
        displayArray[0] = x;
        display.textContent = displayArray.join(' ');
    } else {
        y = 0 - displayArray[displayArray.length - 1];
        displayArray[displayArray.length - 1] = y;
        display.textContent = displayArray.join(' ');
    }
};

function addDecimal() {
    let displayArray = display.textContent.split(' ');
    if (displayArray.length === 3 && displayArray[displayArray.length - 1].indexOf('.') === -1) {
        display.textContent += '.';
    }else if (displayArray[0].indexOf('.') > -1){
        displayArray.push('');
    } else {
        display.textContent += '.';
    }
};

function allClear(){
    display.textContent = 0;
    result = undefined;
};

function backspace(){
    let displayArray = display.textContent.split('');
    if (displayArray.length === 1 && displayArray[0] === '0'){
        display.textContent = displayArray.join('');
    } else if (displayArray.length === 1){ 
        display.textContent = displayArray.join('');
    } else if (displayArray[displayArray.length - 1].indexOf(' ') > -1) {
        displayArray.splice(displayArray.length - 2, displayArray.length -1)
    } else {
    displayArray.pop();
    }
    display.textContent = displayArray.join('')
};


reset.addEventListener('click', () => allClear());
clearEntry.addEventListener('click', () => backspace())
one.addEventListener('click', () => displayInt(1));
two.addEventListener('click', () => displayInt(2));
three.addEventListener('click', () => displayInt(3));
four.addEventListener('click', () => displayInt(4));
five.addEventListener('click', () => displayInt(5));
six.addEventListener('click', () => displayInt(6));
seven.addEventListener('click', () => displayInt(7));
eight.addEventListener('click', () => displayInt(8));
nine.addEventListener('click', () => displayInt(9));
zero.addEventListener('click', () => displayInt(0));
decimal.addEventListener('click', () => addDecimal());
add.addEventListener('click', () => operateOnResult('+'));
subtract.addEventListener('click', () => operateOnResult('-'));
multiply.addEventListener('click', () => operateOnResult('x'));
divide.addEventListener('click', () => operateOnResult('/'));
negativeNumber.addEventListener('click', () => convertToNegative());
equals.addEventListener('click', () => displayResult());

function onKeyDown(key) {
    const numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const operatorKeys = ['-', '+', '/'];
    if (numberKeys.includes(key)) {
        displayInt(+key);
    } else if (operatorKeys.includes(key)) {
        operateOnResult(key);
    } else if (key === '*'){
        operateOnResult('x')
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Enter' || key === '='){
        displayResult();
    }
};

window.addEventListener('keydown', (e) =>{onKeyDown(e.key)});

