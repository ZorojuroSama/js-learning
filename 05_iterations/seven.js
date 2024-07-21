// -------------------------- .map ----------------------
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => { return num + 10})
// console.log(newNums);
// ------------ using forEach -------------------------
const newNums2 = []
myNumbers.forEach( (num) => {
    newNums2.push(num + 10)
} )

console.log(newNums2);