const array = [1, 2, 3, 4, 5];
const addOne = (x) => x + 1;

const result = array.map(addOne);
// result = map(addOne)(array)

console.log("initial:", array);
console.log("result: ", result);
