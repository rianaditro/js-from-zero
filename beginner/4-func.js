function sayHi() {
    console.log("Hi");
}

sayHi();

function sayHello(name) {
    console.log("Hello " + name);
}

sayHello("Rian Aditro");

function sayHello2(name="User"){
    console.log("Hello " + name);
}

sayHello2();

console.log("========================");
// 
function totalNumber(num1, num2) {
    /*
    // do some functionallity here, like
    result = num1 + num2
    return result
    // or directly returning like below
    */    
    return num1 + num2;
}

let totalAsFunction = totalNumber;          // assigning function into variable
let totalResult = totalNumber(10, 20);      // calling function
let totalResult2 = totalAsFunction(10, 20); // calling function from another variable

console.log(totalAsFunction);
console.log(totalResult);
console.log(totalResult2);

// due to short function, we can assign directly
const add = (a,b) => a + b;
console.log(add(10, 20));

console.log("========================");
// function is used to re-use the code
function printResult(num1, num2) {
    // declaring a nested function
    function add(num1, num2) {
        return num1 + num2;
    }

    result = add(num1, num2);
    console.log(result);

    let variableInsideFunction = true;
}

printResult(5, 20);

a = printResult(5, 10);
console.log(a);

// console.log(variableInsideFunction);

// task: convert previous task in chapter 2 to a function