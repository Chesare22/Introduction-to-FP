const array = [1, 2, 3, 4, 5];

const addOne = (x) => x + 1;
const arrayPlusOne = array.map(addOne);

const addTwo = (x) => x + 2;
const arrayPlusTwo = array.map(addTwo);

const addThree = (x) => x + 3;
const arrayPlusThree = array.map(addThree);

console.table({
  array,
  arrayPlusOne,
  arrayPlusTwo,
  arrayPlusThree,
});
