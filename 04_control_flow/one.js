// if 

// const isUserLoggedIn = true
// const temperature = 41
// if (temperature === 40){
//     console.log("less than 40");
// } else {
//     console.log("temperature is greater than 40");
// }

// console.log("Executed");
 
// comparison operators
// <, >, <=, >=, ==, !=, ===

// const score = 200
// if (score > 100) {
//     // var power = "fly"  // ---> we should not use var, it has a global scope which is not good and can interrupt with the other variable values.
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User Power: ${power}`);

// short-hand notations:
const balance = 1000

// if (balance > 500) console.log("test"); // for short hand notations, code should be written in one line only. Scope limited to only one line. (not recommended -- unreadable).

//----------- nesting -----------------------------------------

// if(balance < 500){
//     console.log("less than 500");

// } else if (balance < 750){
//     console.log("less than 750");
    
// } else if (balance < 950){
//     console.log("less than 950");

// } else {
//     console.log("less than 1200");
// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard) {  //check both conditions for true
//     console.log("Allowed to shop");
// }

// if (loggedInFromGoogle || loggedInFromEmail) { //check any one condition is true
//     console.log("Validated")
// }

// ternary operator
// condition ? true : false

const penprice = 35
penprice <= 50 ? console.log("less than 50") : console.log("more than 50")
