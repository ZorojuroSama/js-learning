// --------------------- forof ------------------
// forof loop is mostly used to iterate arrays.
// const myArray = [1,2,3,4,5]
// for (const arr of myArray) {
//     console.log(arr);
// }

// let greetings = "Hello World"

// for (const greet of greetings) {
//     console.log(`each character is: ${greet}`);
// }


// ------------------ maps --------------------

const maps = new Map()
maps.set("IN","India")
maps.set("USA","United States Of America")
maps.set("FR","France")
maps.set("UK","United Kingdom")
maps.set("IN","India") // this key-value pair is not printed bcz "map" only stores unique data.

// console.log(maps);
// How to iterate "Map":- 

// for (const [key, value] of maps) {
//     console.log(key,':-' ,value);
// }

// -------- forof loop is not used to iterate objects.
const myObj = {
    'game1': "NFS",
    'game2': "GOW",
    'game3': "Spider-Man",
}

for (const [key,value] of myObj) {
    console.log(key, ':-', value);
}