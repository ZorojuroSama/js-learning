const email = []

if (email) {
    console.log("got user email");

} else {
    console.log("user email not found");
}

// flasy values:
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy values:
// "0", "false", " ", [], {}, function(){}

// if (email.length === 0){
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("object is empty");
// }

// Null Coalescing Operator ??

let val1; 
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15


console.log(val1);

