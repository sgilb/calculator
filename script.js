let displayValue, firstNumber, secondNumber, operator;
const buttons = document.querySelectorAll(".action");

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
  switch (operator) {
    case "+":
      return add(first, second);
    case "-":
      return subtract(first, second);
    case "*":
      return multiply(first, second);
    case "/":
      return divide(first, second);
    default:
      return "Operator not recognised";
  }
}

function writeNumber(input, canvas) {
  let content = canvas.innerText;
  if (
    Number.isInteger(Number(input)) ||
    (input === "." && !content.includes("."))
  ) {
    content += input;
  }
  canvas.innerText = content;
}

function writeOperator(input, canvas) {
  let content = canvas.innerText;

  if (
    !content.match("[-+/x]") &&
    Number.isInteger(Number(content.slice(-1)))
  ) {
    content += input;
  }
  canvas.innerText = content;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const screen = document.getElementById("screen");
    const element = e.target;

    if (element.classList.contains("clear")) {
      screen.innerText = ""; // Clear display
    } else if (element.classList.contains("input")) {
      writeNumber(element.innerText, screen);
    } else if (element.classList.contains("operator")) {
      writeOperator(element.innerText, screen);
    }
  });
});
