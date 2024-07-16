const user = {
    username: "shubham",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); // "this" function referes the current context of the user{} object.
        console.log(this); // prints current context values of the "user{}".
    }

}
 
// user.welcomeMessage()
// user.username = "sam" // we change the current context (current value) of username.
// user.welcomeMessage() // value of username changed to "sam". ie - current context is changed to "sam".

// console.log(this);



// function chai(){
//     let username = "shubh"
//     console.log(this.username);
// }


// const chai = function (){
//     let username = "shubh"
//     console.log(this.username);
// }

//______________________________________________Arrow Function(=>)________________________________________________________________

//1.
const chai = () => { // arrow(=>) function.
    let username = "Shubham"
    console.log(this.username);
}

// chai()  


//2. Declaring an arrow function -> method 1:

// () => {}
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(4,5));


//3. Declaring arrow function, method 2:
const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(4,2));