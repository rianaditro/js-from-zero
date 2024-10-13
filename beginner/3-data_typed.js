let x, y, z;

x = "a string"; // string
console.log(typeof(x));

x = 10; // same variable can hold different data types
console.log(typeof(x));

x1 = 10.5; //All JavaScript numbers are stored as decimal numbers (floating point).
console.log(typeof(x1)); 

y = 123e5;    // 12300000
z = 123e-5;   // 0.00123
console.log(y);
console.log(z);
// Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.ts(80008)
y = 123456789012345678901234567890
z = BigInt("123456789012345678901234567890")
console.log(y);
console.log(z);

// booleans
console.log(y==z)

// while at this try this
console.log(0 == false);  // true
console.log(0 === false); // false

console.log(NaN === NaN);  // false
console.log(NaN == NaN);   // false

console.log([] == false);  // true
console.log({} == false);  // false

console.log(1 + "2");  // "12"
console.log("2" + 1);  // "21"
console.log(1 - "2");  // -1
console.log(1 - 1 + "2");  // 02

console.log([] + []);          // ""
console.log({} + []);          // 0
console.log([] + {});          // "[object Object]"
console.log({} + {});          // "[object Object][object Object]"

console.log(null == undefined);  // true
console.log(null === undefined); // false

// there is more type of data types like array, object but we will cover them later
