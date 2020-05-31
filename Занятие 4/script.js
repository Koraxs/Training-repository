function doOperation(operation) {
  let valueOne = Number(prompt('Значение 1?'));
  let valueTwo = Number(prompt('Значение 2?'));
  return operation(valueOne, valueTwo);
}

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

/*let checkOperation = prompt('Какую операцию выполнить?');
calcRes(checkOperation);*/

let chosenOperation;

do {
  chosenOperation = prompt('Какую операцию выполнить?'); 
} while ((chosenOperation != '+') && (chosenOperation != '-') && (chosenOperation != '*') && (chosenOperation != '/'));

let numberOfOperands;

do {
  numberOfOperands = Number(prompt('Сколько операндов нужно использовать?'));
} while (isNaN(numberOfOperands) || (numberOfOperands <= 1));

let operands = [];

for (let i=0; i < numberOfOperands; i++) {
  let operand;
  do {
    operand = Number(prompt('Введите операнд ' + (i + 1) + ':'));
  } while (isNaN(operand));
  operands.push(operand);
}

let result = operands.reduce(selectOperation(chosenOperation));
alert(result);
