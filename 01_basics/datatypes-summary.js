// Premitive (7 types): call by value ->
// String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123') // Symbol gives unique values to the input value.
const anotherId = Symbol('123') 
console.log(id === anotherId); // id & anotherId value looks same but their actual values are different

// Reference type (non-primitive):
// Arrays, Objects, Functions

// Array -> [] brackets
const heros = ["Shaktiman", "Naagraj", "Doga"]; 

// Objects are always in {} braces, values are "key:value" pairs.
let myObj = {
    name: "Shubham",  
    age: 24,
}

// Function: 
const myFunction = function() {
    console.log("Hello World")
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


// Memory Allocation ->
// Stack (Primitive) -> makes a copy of data(no change in original value).
// Heap (Non-Primitive) -> gives reference of the value(no cahnge in original value).

// let myEmail = "rajshubham2511@gmail.com"

// let anotherEmail = myEmail

// anotherEmail = "xyzshubh@gmail.com"

// console.log(myEmail);
// console.log(anotherEmail);

let UserOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let Usertwo = UserOne
Usertwo.email = "user2@google.com"

console.log(UserOne.email);
console.log(Usertwo.email);