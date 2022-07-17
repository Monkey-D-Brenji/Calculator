const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const backSpace = document.querySelector(".backspace");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");
const operator = document.querySelectorAll(".operator");
const negative = document.querySelector(".negative");
const dot = document.querySelector(".dot");

let num;
let num2;
let result;
let operation = "";

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
  if (c == "+") {
    return add(a, b);
  } else if (c == "-") {
    return subtract(a, b);
  } else if (c == "X") {
    return multiply(a, b);
  } else {
    return divide(a, b);
  }
}

function clearDisplay() {
  display.textContent = "0";
  num = 0;
  num2 = 0;
  result = 0;
  operation = "";
}

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    let string = display.textContent.toString();
    if (string === "0") display.textContent = "";
    if (display.textContent == result && num2 == undefined)
      display.textContent = "";
    display.textContent += number.textContent;
    if (operation === "") {
      num = display.textContent;
    } else {
      num2 = display.textContent;
    }
  });
});

dot.addEventListener("click", () => {
  let num = display.textContent.toString().split("");
  if (!num.includes(".")) {
    display.textContent += dot.textContent;
  }
});

clear.addEventListener("click", () => {
  clearDisplay();
});

equals.addEventListener("click", () => {
  num = parseFloat(num);
  num2 = parseFloat(num2);
  result = calculate(num, num2, operation);
  result = result.toFixed(1);
  console.log(result);
  if (result.includes(".0")) {
    result = parseInt(result);
  }
  display.textContent = result;
  num = result;
  operation = "";
  if (!num2) {
    display.textContent = "Error";
  }
});

operator.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (operation == "") {
      operation = operator.textContent;
      result = num;
      num2 = undefined;
    } else {
      num = parseFloat(num);
      num2 = parseFloat(num2);
      result = calculate(num, num2, operation);
      result = result.toFixed(1);
      if (result.includes(".0")) {
        result = parseInt(result);
      }
      operation = operator.textContent;
      num = result;
      display.textContent = result;
      num2 = undefined;
    }
  });
});

negative.addEventListener("click", () => {
  let neg = display.textContent;
  neg = neg * -1;
  display.textContent = neg;
  num = neg;
});

backSpace.addEventListener("click", () => {
  let string = display.textContent.toString();
  let newString = string
    .split("")
    .splice(0, string.length - 1)
    .join("");
  display.textContent = newString;
  if (display.textContent == "") {
    display.textContent = 0;
  }
});
