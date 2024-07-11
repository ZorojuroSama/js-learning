// DATES

let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());


//################ Explicit code to get accurate time in Indian Time Zone (Copied from chatGPT) ###############################
// Get the current date and time
let currentDate = new Date();

// Convert the time to the desired time zone (e.g., IST)
let istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
let utcDate = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000); // Convert local time to UTC
let istDate = new Date(utcDate + istOffset); // Convert UTC to IST

console.log(istDate.toLocaleString());
