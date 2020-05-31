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

function calcRes(method) {
  switch (method) {
    case "+":
      alert(doOperation(add));
      break;
    case "-": 
      alert(doOperation(deduct));
      break;
    case "*": 
      alert(doOperation(multiply));
      break;
    case "/": 
      alert(doOperation(divide));
      break;
    default: 
      alert( 'Доступ закрыт' );
  } 
}

let checkOperation = prompt('Какую операцию выполнить?');
calcRes(checkOperation);
