const array = [1, 2, 3, 4, 5];
const add = (y) => (x) => x + y;

const arrayPlusOne = array.map(add(1));
const arrayPlusTwo = array.map(add(2));
const arrayPlusThree = array.map(add(3));

console.table({
  array,
  arrayPlusOne,
  arrayPlusTwo,
  arrayPlusThree,
});

console.log("22 + 13 =", add(22)(13));
