const array = [1, 2, 3, 4, 5];
console.log("initial:", array);

// Add 1 to each item
for (let i = 0; i < array.length; i++) {
  array[i] = array[i] + 1;
}

console.log("result: ", array);
