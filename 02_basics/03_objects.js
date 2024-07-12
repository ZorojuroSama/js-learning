// singleton
// Object.create()

//--------OBJECT LITERALS--------------------------

// Interview Question --> create an object which includes a Symbol and print. (looks easy but syntax matters).

// to store a symbol datatype --->

const mySym = Symbol("key1") // declairing a Symbol

const JsUser = {
    name: "Shubham",
    "full name": "Shubham Raj", 
//   mySym: "myKey1", // we cannot access Symbols using this syntax. It will give an output but datatype will change to a string.
    [mySym]: "myKey1", // preferred syntax. **Important for interviews**
    age: 24,
    location: "India",
    email: "shubham@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday", "Saturday"]
}

console.log(JsUser.email); // method 1
console.log(JsUser["email"]); // recommended method
console.log(JsUser["full name"]); // better to use [] to access keys from an object. * keys are stored as strings in objects *.

console.log(typeof(JsUser.mySym)); // it will give output as a string. 

// to store symbols we use syntax --> [mySym]: "myKey1"
// to access the Key value of symbol --> console.log(JsUser[mySym]);

console.log(JsUser[mySym]); // only syntax to access symbols.
console.log(typeof JsUser[mySym]); // it will return string type but it is the type of the property "mykey1" and not the type of [mySym] key.
console.log(mySym);

// to overwrite values --->

JsUser.email = "shubham@chatgpt.com" // overwrite the value of email.

// freeze/lock values ----> we freeze the object 

Object.freeze(JsUser)
JsUser.email = "shubh@microsoft.com" // changes not reflect bcz we locked the ocbject before making changes.

// console.log(JsUser);


// ------------------------FUNCTIONS(in objects)----------------------

JsUser.greeting = function (){
    console.log("Hello JS User");
}


JsUser.greeting2 = function (){
    console.log(`Hello JS User, ${this.name} `); //interpolation, recommended.
}

console.log(JsUser.greeting()); 
console.log(JsUser.greeting2()); 
// console.log(JsUser.greeting);



