function doubleFunction(a) {
  return a * 2;
}

const doubleArrow = (a) => a * 2;

function sumFunction(a, b) {
  return a + b;
}

const sumArrow = (a, b) => a + b;

console.log("doubleFunction(21):", doubleFunction(21));
console.log("doubleArrow(21):", doubleArrow(21));

console.log("sumFunction(22, 13):", sumFunction(22, 13));
console.log("sumArrow(22, 13):", sumArrow(22, 13));
