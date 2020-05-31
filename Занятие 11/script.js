const calc = createCalculator(10);

console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 100
console.log(calc.sub(40)); // -30
console.log(calc.div(10)); // 1

calc.set(100); //

console.log(calc.sum(5)); /// 105
console.log(calc.mult(10)); // 1000
console.log(calc.sub(40)); // 60
console.log(calc.div(10)); // 10

function createCalculator(base) {
  let a = base;
  return {
    sum: (b) => (a + b),
    mult: (b) => (a * b),
    sub: (b) => (a - b),
    div: (b) => (a / b),
    set: (b) => (a = b)
  }
}
