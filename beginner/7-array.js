// Array
// how to declare it?
const ar1 = [1, 2, 3];
// or
const ar2 = [];
ar2[0] = 1;
ar2[1] = 2;
ar2[2] = 3;

console.log(ar1);
console.log(ar2)
// its the same right?

// use slicing for
ar1[0] = 10;
console.log(ar1[0])
console.log(ar1)

//method
console.log(ar1.length);
console.log(ar1.reverse());
console.log(ar1.sort()); // cant sort by number

let arText = ["C", "B", "D", "F", "G", "A"];
console.log(arText.sort()); // sort by alphabetical order
