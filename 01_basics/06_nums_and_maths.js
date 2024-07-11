const score = 400

const balance = new Number(100)
// console.log(balance);


// console.log(typeof(balance.toString()));
// console.log(balance.toFixed(1));

const otherNumber = 123.4525
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// ########################## Maths ###########################

// console.log(Math.sqrt(100));
// console.log(Math.abs(-100));
// console.log(Math.round(4.8));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9)); // floor value of 4.9 = 4.
// console.log(Math.min(4, 3, 5, 7));
// console.log(Math.max(4, 3, 5, 7));

// console.log(Math.random()); // Gives a random value b/w 0 & 1 (0.1, 0.2, 0.021, etc)
// console.log((Math.random()*10) + 1); // To get values from 1-9
// console.log(Math.floor(Math.random()*10) + 1); // by using [Math.floor()] we will get the floor value (i.e-> 4.9 = 4).
// But if the output is (0.1) after multiplying it with 10, then we add [+ 1] to get the values b/w 1 to 9.

// to define a range for random numbers->

const min = 10
const max = 20

// We use a formula (max - min + 1) and multiply it with Math.random() method.

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// let's assume math.random() gives an output = 0.5

// So, ------(Math.floor(0.5 * (20 - 10 + 1)) + 10)
// ----------(Math.floor(0.5 *(11)) + 10)
// ----------(Math.floor(5.5) + 10) -> gives floor value of 5.5 = 5.
// ----------(5 + 10) = 15.