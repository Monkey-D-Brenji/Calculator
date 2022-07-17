const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const backSpace = document.querySelector(".backspace");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");
const operator = document.querySelectorAll(".operator");
const negative = document.querySelector(".negative");
//const subtractOperator = document.querySelector(".subtract");
//const multiplyOperator = document.querySelector(".multiply");
//const divideOperator = document.querySelector(".divide");

let num;
let num2;
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

function makeNegative(a) {
  a = -a;
  if (a < 0) a = +a;
}

function clearDisplay() {
  display.textContent = "0";
  num = 0;
  num2 = 0;
  operation = "";
}

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (display.textContent == 0) display.textContent = "";
    display.textContent += number.textContent;
    if (operation === "") {
      num = display.textContent;
    } else {
      num2 = display.textContent;
    }
  });
});

clear.addEventListener("click", () => {
  clearDisplay();
  //num = display.textContent;
});

equals.addEventListener("click", () => {
  num = parseInt(num);
  num2 = parseInt(num2);
  result = calculate(num, num2, operation);
  display.textContent = result;
  num = result;
});

operator.forEach((operator) => {
  operator.addEventListener("click", () => {
    operation = operator.textContent;
    display.textContent = "0";
  });
});

negative.addEventListener("click", () => {
  makeNegative(display.textContent);
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
