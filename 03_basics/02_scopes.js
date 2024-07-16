// var c = 300
// Global scope --> values from global scope can be accessed inside block scope.
let a = 300

if (true) {
    let a = 10
    const b = 20  // {} any value inside curly braces are block scope.
    //values of block scope are only limited to the block & doesn't interfere with the global values.
    // var c = 30
    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(a); // var doesn't follows any scope, so we avoid var from using. 


function one() {
    const username = "shubham"

    function two() {
        const website = "youtube"
        // console.log(username); // this will execute --> username is a global scope variable and can be accessed by block scope function.
    }
    // console.log(website); // this line will give error --> website variable is a block scope and cannot be accessed to global.

    two()
}

one()

if (true) {
    const username = "shubham"
    if (username === "shubham") {
        const website = "instagram"
        // console.log(username + "",website);
    }
    // console.log(website);
}
// console.log(username);

//===========================Interesting====================

// console.log(addone(6));

function addone(num) {
    return num + 1
}

// addtwo(5) 
//cannot be executed due to its scope, it is trying to access addtwo() function before declaration which will give an error. 

const addtwo = function(num) {
    return num + 2
}

addtwo(5)
