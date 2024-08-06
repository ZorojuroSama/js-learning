/*

A promise in JavaScript is an object that represents the eventual
completion (or failure) of an asynchronous operation
and its resulting value.

Real-World Example

Imagine you order a pizza:

1. Order Placed (Pending): You call the pizza place and place your order. 
   You are waiting for your pizza.
2. Pizza Delivered (Fulfilled): The pizza is delivered to you,
   and you can enjoy your meal.
3. Order Failed (Rejected): The pizza place calls and informs
   you they can't deliver your pizza due to some issue.

*/

// Promise one:
const promiseOne = new Promise(function(resolve, reject){
    /*
    Do a Async task
    DB calls, cryptography, network call
    */
    setTimeout(() => {
        console.log("Async task is completed");
        resolve(); // connects resolve with .then() method.
    }, 1000);

})

promiseOne.then(function(){
    console.log("Promise consumed");

})

// Promise two:
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function() {
    console.log("Async 2 completed");

})

// Promise 3:

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username:"Shubham", email:"shubh@example.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);

})

// Promise 4:\

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Shubham", password: "12345" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 3000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise is either resolved or rejected");
  });



// Promise 5:
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Shubham", password: "12345" });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);    
    };
};

consumePromiseFive();

//-------------###-----------------//

// async function getAllUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
    
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})