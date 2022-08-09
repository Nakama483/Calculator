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
let result; //undefined
const reg = /[x+-/](.*)/;

function resetDisplay() {
    if (result !== undefined){
        result = undefined;
        display.textContent = '';
    }
};

function operateOnResult(symbol) {
    if (result !== undefined){
        x = result;
        operator = symbol;
        display.textContent = `Ans ${symbol} `;
        result = undefined;
    } else {
        x = +display.textContent;
        operator = symbol;
        display.textContent += ` ${symbol} `;
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

add.addEventListener('click', () => operateOnResult('+'));
add.addEventListener('click', () => console.log(x)); //
add.addEventListener('click', () => console.log(result)); //
subtract.addEventListener('click', () => operateOnResult('-'));
multiply.addEventListener('click', () => operateOnResult('x'));
divide.addEventListener('click', () => operateOnResult('/'));

clear.addEventListener('click', () => display.textContent = '');
equals.addEventListener('click', () => y = display.textContent.match(reg)[1]);
equals.addEventListener('click', () => console.log(x));
equals.addEventListener('click', () => console.log(operator));
equals.addEventListener('click', () => console.log(y));
equals.addEventListener('click', () => display.textContent = operate(+x, operator, +y));
equals.addEventListener('click', () => result = display.textContent);


