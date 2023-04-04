
let prevNumber = ''
let calculatorOperation = ''
let curenttNumber = '0'

const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number
} 

const inputNumber = (number) => {
    if (curenttNumber === '0') {
        curenttNumber = number
    } else{
        curenttNumber += number
    }
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener('click', (event) =>{
        inputNumber(event.target.value)
        updateScreen(curenttNumber)
    })
})

// operator
const inputOperator = (operator) =>{

    if (calculatorOperation === '') {
        prevNumber = curenttNumber
    }

    calculatorOperation = operator
    curenttNumber = '0'
}

const operators = document.querySelectorAll('.operator')

operators.forEach((operator) => {
    operator.addEventListener('click', (event) =>{
        inputOperator(event.target.value)
    })
})


// equal-sign
const equalSign = document.querySelector('.equal-sign')

const calculate = () => {
    let result = ''
    switch (calculatorOperation) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(curenttNumber)
            break;
        case "-":
            result = prevNumber - curenttNumber
            break;
        case "*":
            result = prevNumber * curenttNumber
            break;
        case "/":
            result = prevNumber / curenttNumber
            break;
        default:
            return;
    }
    curenttNumber = result
    calculatorOperation = ''
}

equalSign.addEventListener('click', () =>{
    calculate()
    updateScreen(curenttNumber)
})

//  mengaktifkan btn clear all

const clearBtn = document.querySelector('.all-clear')

const clearAll = () =>{
    prevNumber = ''
    calculatorOperation = ''
    curenttNumber = '0'
}

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(curenttNumber)
})


// kalkulasi angka decimal
const desimal = document.querySelector('.decimal')

inputDesimal = (dot) =>{
    if (curenttNumber.includes('.')) {
        return
    }
    curenttNumber += dot
}

desimal.addEventListener('click', (event) =>{
    inputDesimal(event.target.value)
    updateScreen(curenttNumber)
})


