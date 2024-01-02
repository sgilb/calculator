let displayValue, firstNumber, secondNumber, operator;
const buttons = document.querySelectorAll(".action");
const screen = document.getElementById("screen");

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
  first = Number(first);
  second = Number(second);
  
  switch (operator) {
    case "+":
      return add(first, second);
    case "-":
      return subtract(first, second);
    case "x":
      return multiply(first, second);
    case "/":
      return divide(first, second);
    default:
      return "Operator not recognised";
  }
}

function write(input) {
  let content = screen.innerText;
  const lastCharIsNumber = Number.isInteger(
    Number(removeWhitespace(content).slice(-1))
  );
  const inputIsNumber = Number.isInteger(Number(input));

  if (input.match(/[-+/x]/) && lastCharIsNumber) {
    content += ` ${input} `;
  } else if (inputIsNumber || (input === "." && !content.includes("."))) {
    content += input;
  }
  refreshScreen(content);
}

// TODO
// function solve(equation) {
//   const elements = equation.split(" ");
//   let total = 0;

//   for (let i = 0; i < elements.length; i += 3) {
//     let first = elements[i];
//     let operator = elements[i+1];
//     let second = elements[i+2];

//     total += operate(first, operator, second);
//     console.log(total);
//   }
//   refreshScreen(total);
// }

function removeWhitespace(string) {
  return string.replace(/\s/g, "");
}

function refreshScreen(content) {
  displayValue = content;
  screen.innerText = displayValue;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const screen = document.getElementById("screen");
    const classes = e.target.classList;

    switch (true) {
      case classes.contains("clear"):
        screen.innerText = ""; // Clear display
        break;
      case classes.contains("input") || classes.contains("operator"):
        write(e.target.innerText);
        break;
      case classes.contains("equals"):
        solve(displayValue);
        break;
    }
  });
});
