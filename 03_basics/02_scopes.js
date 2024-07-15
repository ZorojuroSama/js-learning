// var c = 300
// Global scope --> values from global scope can be accessed inside block scope.
let a = 300

if (true) {
    let a = 10
    const b = 20  // {} any value inside curly braces are block scope.
    //values of block scope are only limited to the block & doesn't interfere with the global values.
    // var c = 30
    console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
console.log(a); // var doesn't follows any scope, so we avoid var from using. 