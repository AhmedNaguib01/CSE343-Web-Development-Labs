let screen = document.getElementById("display");

let currentValue = "";
let previousValue = "";
let currentOperator = null;

function pressNumber(number) {
  if (currentValue === "0" && number === "0") {
    return;
  }
  currentValue += number;
  updateScreen();
}

function pressOperator(operator) {
  if (currentValue === "" && previousValue === "") {
    return;
  }
  if (currentOperator !== null) {
    performCalculation();
  }
  currentOperator = operator;
  previousValue = currentValue;
  currentValue = "";
}

function performCalculation() {
  if (currentOperator === null || currentValue === "") {
    return;
  }

  const first = parseFloat(previousValue);
  const second = parseFloat(currentValue);
  let result;

  switch (currentOperator) {
    case "+":
      result = first + second;
      break;
    case "-":
      result = first - second;
      break;
    case "*":
      result = first * second;
      break;
    case "/":
      result = second === 0 ? "Error" : first / second;
      break;
  }

  screen.textContent = result;
  currentValue = String(result);
  currentOperator = null;
  previousValue = "";
}

function pressDot() {
  if (!currentValue.includes(".")) {
    currentValue += ".";
    updateScreen();
  }
}

function makePercent() {
  if (currentValue === "") {
    return;
  } 
  currentValue = String(parseFloat(currentValue) / 100);
  updateScreen();
}

function clearScreen() {
  currentValue = "";
  previousValue = "";
  currentOperator = null;
  updateScreen("0");
}

function updateScreen(value) {
  screen.textContent = value || currentValue || "0";
}
