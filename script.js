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
  const elements = content.split(" ");
  const lastElement = elements[elements.length - 1];

  if (input.match(/[-+/x]/) && lastCharIsNumber) {
    content += ` ${input} `;
  } else if (inputIsNumber || (input === "." && !lastElement.includes("."))) {
    content += input;
  }
  refreshScreen(content);
}

function solve(equation) {
  const elements = equation.split(" ");
  console.log(elements);

  let first = elements[0];
  let operator = elements[1];
  let second = elements[2];
  let total;

  if (first && !(operator && second)) {
    total = first;
  } else if (first && operator && second) {
    total = operate(first, operator, second);
  } else {
    total = 0;
  }

  if (elements.length > 3) {
    for (let i = 3; i < elements.length; i += 2) {
      total = operate(total, elements[i], elements[i + 1]);
    }
  }

  total = roundToTwoDP(total);

  if (total == "Infinity") {
    refreshScreen("You can't divide by 0!");
  } else {
    refreshScreen(total);
  }
}

function removeWhitespace(string) {
  return string.replace(/\s/g, "");
}

function refreshScreen(content) {
  displayValue = content;
  screen.innerText = displayValue;
}

function roundToTwoDP(num) {
  return +(Math.round(num + "e+2")  + "e-2");
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
        displayValue ? solve(displayValue) : 0;
        break;
    }
  });
});
