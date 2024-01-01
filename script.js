let firstNumber, operator, secondNumber;
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
  if (
    Number.isInteger(Number(input)) ||
    (input === "." && !canvas.innerText.includes("."))
  ) {
    canvas.innerText += input;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const screen = document.getElementById("screen");
    const element = e.target;

    if (element.classList.contains("clear")) {
      screen.innerText = "";
    } else if (element.classList.contains("input")) {
      writeNumber(element.innerText, screen);
    }
  });
});
