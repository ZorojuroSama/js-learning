// Immediately Invoked Function Expression (IIFE)
// Global scope ke pollution se problem hoti hai kayi baar, uss global scope ke values,variable ya declaration ke pollution ko hatane ke liye IIFE ka use krte hain.
// Aur kisi bhi function ko immediately invoke/execute krna ho tab ise use krte hain.
// syntax - ()();
// 1st () - function definition, 2nd () - execution , 3rd ; semicolon - used to stop the function.
// the semicolon ; is important to terminate the invoked function.


// Named IIFE:
(function chai (){  
    console.log(`DB Connected`);
})();

// Unnamed IFFE:
( (name) => {
    console.log(`DB Connected, ${name} `);
} )("Shubh");

