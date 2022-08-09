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
        case operator === '*':
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
let result; //undefined
const reg = /[x+-/](.*)/;

function resetDisplay() {
    if (result !== undefined){
        result = undefined;
        display.textContent = '';
    }
};

function operateOnResult(operator) {
    if (result !== undefined){
        x = result;
        display.textContent = `Ans ${operator} `;
        result = undefined;
    }
};

one.addEventListener('click', () => resetDisplay());
one.addEventListener('click', () => display.textContent += 1)
two.addEventListener('click', () => resetDisplay());
two.addEventListener('click', () => display.textContent += 2);
three.addEventListener('click', () => resetDisplay());
three.addEventListener('click', () => display.textContent += 3);
four.addEventListener('click', () => resetDisplay());
four.addEventListener('click', () => display.textContent += 4);
five.addEventListener('click', () => resetDisplay());
five.addEventListener('click', () => display.textContent += 5);
six.addEventListener('click', () => resetDisplay());
six.addEventListener('click', () => display.textContent += 6);
seven.addEventListener('click', () => resetDisplay());
seven.addEventListener('click', () => display.textContent += 7);
eight.addEventListener('click', () => resetDisplay());
eight.addEventListener('click', () => display.textContent += 8);
nine.addEventListener('click', () => resetDisplay());
nine.addEventListener('click', () => display.textContent += 9);
zero.addEventListener('click', () => resetDisplay());
zero.addEventListener('click', () => display.textContent += 0);

add.addEventListener('click', () => display.textContent += ' + ');
subtract.addEventListener('click', () => display.textContent += ' - ');
multiply.addEventListener('click', () => display.textContent += ' x ');
divide.addEventListener('click', () => display.textContent += ' / ');

add.addEventListener('click', () => operator = '+');
subtract.addEventListener('click', () => operator = '-');
multiply.addEventListener('click', () => operator = '*');
divide.addEventListener('click', () => operator = '/');

add.addEventListener('click', () => x = +display.textContent.slice(0, -2));
subtract.addEventListener('click', () => x = +display.textContent.slice(0, -2));
multiply.addEventListener('click', () => x = +display.textContent.slice(0, -2));
divide.addEventListener('click', () => x = +display.textContent.slice(0, -2));

clear.addEventListener('click', () => display.textContent = '');
equals.addEventListener('click', () => y = display.textContent.match(reg)[1]);
equals.addEventListener('click', () => display.textContent = operate(+x, operator, +y));
equals.addEventListener('click', () => result = display.textContent);


