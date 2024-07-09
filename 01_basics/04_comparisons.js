console.log(null > 0); // -> false : comparison operators convert null to a number, treating as 0
console.log(null == 0); // -> flase : ==(equality check) works differently in JS. null == 0 -> flase.
console.log(null >= 0); // -> true : converts null to number {0}.

// // output for comparison of undefined will always be false.
 console.log(undefined > 0);
 console.log(undefined == 0);
 console.log(undefined < 0);
 console.log(undefined >= 0);

 console.log("2" > 1);
// String to Number Conversion: JavaScript converts the string "2" to the number 2.
 console.log("02" > 1);
// JavaScript converts the string "2" to the number 2.
 console.log("20" > 1);
 // JavaScript converts the string "20" to the number 20.