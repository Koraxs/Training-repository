function add(a, b) {
  return a + b;
}

function deduct(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function selectOperation(operationStr) {
  switch(operationStr) {
    case "+": return add; break;
    case "-": return deduct; break;
    case "*": return multiply; break;
    case "/": return divide; break;
  }
}

let chosenOperation;

do {
  chosenOperation = prompt('Какую операцию выполнить?'); 
} while ((chosenOperation != '+') && (chosenOperation != '-') && (chosenOperation != '*') && (chosenOperation != '/'));


let operandsInput = prompt('Введите операнды');
 
let operands = operandsInput
  .split(' ')
  .map(function (i) { return Number(i); })
  .filter(function (i) { return !isNaN(i); });


let result = operands.reduce(selectOperation(chosenOperation));
alert(`${operands.join(` ${chosenOperation} `)} = ${result}`);
