// initiate an empty object
const person = {};
const anObject = new Object(); // same as above

// add properties to the object
person.name = "Rian";
person.age = 30;

console.log(person);

// or directly. this is prefered method
const person2 = {
    name: "Rian",
    age: 30
}

console.log(person2)

// accesing properties
console.log(person.name)
console.log(person["age"])

// add a method to person
person.greetings = function() {
    console.log("Hello");
}

// delete a property
delete person.age //  can you see the age now?

console.log(person) // is there any anonymous function? what is that? can we change it?
person.greetings()

// copy an object
const new_person = person;

// change name
new_person.name = "Udin";

console.log(new_person);