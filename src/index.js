function add (numberOne, numberTwo) {
  return (numberOne + numberTwo)
}

function subtract (numberOne, numberTwo) {
  return (numberOne - numberTwo)
}

function multiply (numberOne, numberTwo) {
  return (numberOne * numberTwo)
}

function divide (numberOne, numberTwo) {
  return (numberOne / numberTwo)
}

let firstNumber = Number(process.argv.slice(2, 3))
let action = process.argv.slice(3, 4).toString()
let secondNumber = Number(process.argv.slice(4, 5))

if (action === '+') {
  add(firstNumber, secondNumber)
} else if (action === '-') {
  subtract(firstNumber, secondNumber)
} else if (action === '*') {
  multiply(firstNumber, secondNumber)
} else if (action === '/') {
  divide(firstNumber, secondNumber)
} else {
  console.log('Enter a valid action')
}
