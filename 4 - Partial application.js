const array = [1, 2, 3, 4, 5];

function add(y) {
  return function (x) {
    return x + y;
  };
}

const addOne = add(1);
const arrayPlusOne = array.map(addOne);

const addTwo = add(2);
const arrayPlusTwo = array.map(addTwo);

const addThree = add(3);
const arrayPlusThree = array.map(addThree);

console.table({
  array,
  arrayPlusOne,
  arrayPlusTwo,
  arrayPlusThree,
});
