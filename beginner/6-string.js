/*
let text = "Hello World";
let myName = "Rian Aditro";

let message = `Hello ${myName}`;
console.log(message)

let escapeText = "Hello \"World\"";
console.log(escapeText)

let longMessage =
`we can add
a long string
with this
`; // notice empty line here

console.log(longMessage)


// string methods
let greetings = "Good Morning EveryOne!";
console.log(greetings.length);

// string slicing
console.log(greetings.slice(0, 5));
console.log(greetings.slice(7));
console.log(greetings.slice(-5));
console.log(greetings.substring(7, 11));
console.log(greetings.substring(7));
console.log(greetings.replace("Good", "Bad"));
console.log(greetings.replaceAll("EveryOne", "Everyone"));
console.log(greetings.split(" "));
console.log(greetings.startsWith("Good"));
console.log(greetings.endsWith("Good"));
console.log(greetings.includes("EveryOne"));
console.log(greetings.repeat(3));

// string manipulation
let text1 = "Hi"
let text2 = "Rian"
let text3 = text1.concat(" ",text2);
console.log(text3)

console.log(greetings.toUpperCase());
console.log(greetings.toLowerCase());

// string search
console.log(greetings.charAt(0));           // index start from 0
console.log(greetings.indexOf("o"));        // find the first found
console.log(greetings.lastIndexOf("o"));    // find the last found

console.log(greetings.search("Every"));     // its returning the index but not actually same, by params and regex
console.log(greetings.search("this will not found")) // its a common convention to return -1 if not found

console.log(greetings.match("every"));      // returns null instead of -1, unlike search. why?
console.log(greetings.match(/every/gi));    // match by global and case-incensitive

console.log(greetings.matchAll(/n/gi));  // it will return object of regex string iterator

matched = greetings.matchAll(/n/gi);
for (let m of matched) {
    console.log(m);
}


/*
Challenge code:
Task1: reversed string
Task2: check if string is palindrome
Task3: count number of words
Task4: count vowels
*/







// task 1
let task1 = "Hello World";
console.log(task1.reverse)
