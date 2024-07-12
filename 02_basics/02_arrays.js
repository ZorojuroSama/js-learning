const marvelHeros = ["thor", "hulk", "vision"]
const dcHeros = ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros) // arrays can store arrays inside them. push() method is not good for merging two arrays into one.
//they do not get merged, it store dcHeros(array) as data in marvelHeros(array)

// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

// Spread operator -->
// const all_new_heros = [...marvelHeros, ...dcHeros]
// console.log(all_new_heros); // this is much better syntax to merge arrays.

// //.flat() --> to remove depths from an array.
// const another_array = [1, 2, 3, [4, 5, 6, [7, 8]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Shubham"));
console.log(Array.from("Shubham"));
console.log(Array.from({name:"Shubh"})); // **interesting**
//--------------------------------------- to generate an array from object, specify to make arrays either from only keys or values.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));