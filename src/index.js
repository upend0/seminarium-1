function add (numberOne, numberTwo) {
  return console.log((numberOne + numberTwo))
}
add(2, 3)

function subtract (numberOne, numberTwo) {
  return console.log((numberOne - numberTwo))
}
subtract(2, 3)

function multiply (numberOne, numberTwo) {
  return console.log((numberOne * numberTwo))
}
multiply(2, 3)

function divide (numberOne, numberTwo) {
  return console.log((numberOne / numberTwo))
}
divide(2, 3)

let firstNumber = Number(process.argv.slice(2, 3))
let action = process.argv.slice(3, 4).toString()
let secondNumber = Number(process.argv.slice(4, 5))

// add(firstNumber, secondNumber) 
console.log('TEST', action)
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
