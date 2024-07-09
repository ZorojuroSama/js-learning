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

