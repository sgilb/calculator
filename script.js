let firstNumber, operator, secondNumber;

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

function operate(first, operator, second) {
  switch(operator) {
    case "+":
      add(first, second);
      break;
    case "-":
      subtract(first, second);
      break;
    case "*":
      multiply(first, second);
      break;
    case "/":
      divide(first, second);
      break;   
    default:
      return "Operator not recognised"
  }
}