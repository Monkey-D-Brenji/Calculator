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

function calculate(a, b, c) {
  if (c === "+") {
    add(a, b);
  } else if (c === "-") {
    subtract(a, b);
  } else if (c === "*") {
    multiply(a, b);
  } else {
    divide(a, b);
  }
}
