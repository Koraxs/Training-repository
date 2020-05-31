let questionOne = Number(prompt('Вопрос 1?'));
let questionTwo = Number(prompt('Вопрос 2?'));

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

console.log(add(questionOne, questionTwo));
console.log(deduct(questionOne, questionTwo));
console.log(multiply(questionOne, questionTwo));
console.log(divide(questionOne, questionTwo));
