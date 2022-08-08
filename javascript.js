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
const reg = /[x+-/](.*)/;

one.addEventListener('click', () => display.textContent += 1);
two.addEventListener('click', () => display.textContent += 2);
three.addEventListener('click', () => display.textContent += 3);
four.addEventListener('click', () => display.textContent += 4);
five.addEventListener('click', () => display.textContent += 5);
six.addEventListener('click', () => display.textContent += 6);
seven.addEventListener('click', () => display.textContent += 7);
eight.addEventListener('click', () => display.textContent += 8);
nine.addEventListener('click', () => display.textContent += 9);
zero.addEventListener('click', () => display.textContent += 0);


add.addEventListener('click', () => display.textContent += ' + ');
subtract.addEventListener('click', () => display.textContent += ' - ');
multiply.addEventListener('click', () => display.textContent += ' x ');
divide.addEventListener('click', () => display.textContent += ' / ');

add.addEventListener('click', () => x = +display.textContent.slice(0, -2));
subtract.addEventListener('click', () => x = +display.textContent.slice(0, -2));
multiply.addEventListener('click', () => x = +display.textContent.slice(0, -2));
divide.addEventListener('click', () => x = +display.textContent.slice(0, -2));

equals.addEventListener('click', () => y = display.textContent.match(reg)[1]);
equals.addEventListener('click', () => console.log(y));
equals.addEventListener('click', () => display.textContent = operate());
clear.addEventListener('click', () => display.textContent = '');











// one.addEventListener('click', () => x = 1);
// one.addEventListener('click', () => console.log(x));
// two.addEventListener('click', () => x = 2);
// three.addEventListener('click', () => x = 3);
// four.addEventListener('click', () => x = 4);
// five.addEventListener('click', () => x = 5);
// six.addEventListener('click', () => x = 6);
// seven.addEventListener('click', () => x = 7);
// eight.addEventListener('click', () => x = 8);
// nine.addEventListener('click', () => x = 9);
// zero.addEventListener('click', () => x = 0);
