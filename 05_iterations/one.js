// ----------------------for loops:---------------------

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// } 


// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 times I beat yo ass!")
//     }
//     console.log(element);
// } 

for (let i = 1; i <= 5; i++) {
    // console.log(`outer loop value: ${i}`);

    for(let j = 1; j <= 5; j++){
        //console.log(`inner loop value: ${j} and inner loop ${i}`);
        // console.log(`${i} + ${j} = ${i * j}`);
    }
}

// let myArray = ["flash", "superman", "batman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// ------------------- break & continue ------------------------------

// for (let index = 0; index < 10; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is: ${index}`);
// }

// for (let index = 0; index < 10; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue;
//     }
//     console.log(`Value of i is: ${index}`);
// }