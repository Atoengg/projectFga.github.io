let prevNumber = '';
let calculatorOperation = '';
let currentNumber = '0';

const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

// Operator
const inputOperator = (operator) => {
  if (calculatorOperation === '') {
    prevNumber = currentNumber;
  }

  calculatorOperation = operator;
  currentNumber = '0';
  updateScreen(calculatorOperation); // Menampilkan nilai operator pada layar kalkulator
};

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    inputOperator(event.target.value);
  });
});

// Equal sign
const equalSign = document.querySelector('.equal-sign');

const calculate = () => {
  let result = '';
  switch (calculatorOperation) {
    case '+':
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = prevNumber - currentNumber;
      break;
    case '*':
      result = prevNumber * currentNumber;
      break;
    case '/':
      result = prevNumber / currentNumber;
      break;
    default:
      return;
  }
  currentNumber = result;
  calculatorOperation = '';
  updateScreen(currentNumber);
};

equalSign.addEventListener('click', () => {
  calculate();
});

// Clear all
const clearBtn = document.querySelector('.all-clear');

const clearAll = () => {
  prevNumber = '';
  calculatorOperation = '';
  currentNumber = '0';
  updateScreen(currentNumber);
};

clearBtn.addEventListener('click', () => {
  clearAll();
});

// Decimal
const decimal = document.querySelector('.decimal');

const inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return;
  }
  currentNumber += dot;
};

decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});