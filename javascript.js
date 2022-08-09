function addition(x, y) {
    return x + y;
};

function subtraction(x, y) {
    return x - y;
};

function multiplication(x, y) {
    return x * y;
};

function division(x, y) {
    return x / y;
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

const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

let x;
let y;
let operator;
let result; 

function resetDisplay(num) {
    if (result !== undefined){
        result = undefined;
        display.textContent = '';
    } else {
        display.textContent += num;
    }
};

function displayResult() {
    y = display.textContent.match(/[x+-/](.*)/)[1];
    display.textContent = operate(+x, operator, +y);
    result = display.textContent;
}

function operateOnResult(symbol) {
    if (/[+\-x/]/.test(display.textContent)) {
        displayResult();
        x = result;
        operator = symbol
        display.textContent += ` ${symbol} `;
        result = undefined;
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

one.addEventListener('click', () => resetDisplay(1));
two.addEventListener('click', () => resetDisplay(2));
three.addEventListener('click', () => resetDisplay(3));
four.addEventListener('click', () => resetDisplay(4));
five.addEventListener('click', () => resetDisplay(5));
six.addEventListener('click', () => resetDisplay(6));
seven.addEventListener('click', () => resetDisplay(7));
eight.addEventListener('click', () => resetDisplay(8));
nine.addEventListener('click', () => resetDisplay(9));
zero.addEventListener('click', () => resetDisplay(0));

add.addEventListener('click', () => operateOnResult('+'));
subtract.addEventListener('click', () => operateOnResult('-'));
multiply.addEventListener('click', () => operateOnResult('x'));
divide.addEventListener('click', () => operateOnResult('/'));

clear.addEventListener('click', () => display.textContent = '');
equals.addEventListener('click', () => displayResult())

