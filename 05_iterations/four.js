//---------------------forin loop -----------------
// forin is used to iterate objects in an efficient way.
const myObject = {
    js:'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
    console.log(`${key} is shortcut for ${myObject[key]}`);
}

// maps are not iteratable. 
// const maps = new Map()
// maps.set("IN","India")
// maps.set("USA","United States Of America")
// maps.set("FR","France")
// maps.set("UK","United Kingdom")

// for (const key in maps) {
//     console.log(key);
// }