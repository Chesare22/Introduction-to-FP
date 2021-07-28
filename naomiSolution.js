const array = [1, 2, 3, 4, 5];
const add = (y) => (x) => x + y;

const range = (start) => (end) =>
  start === end
    ? [start]
    : [start, ...range(start + 1)(end)];

const [addOne, addTwo, addThree] = range(1)(3).map(add);

const arrayPlusOne = array.map(addOne);
const arrayPlusTwo = array.map(addTwo);
const arrayPlusThree = array.map(addThree);

console.table({
  array,
  arrayPlusOne,
  arrayPlusTwo,
  arrayPlusThree,
});
