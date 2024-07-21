// iterating arrays using "foreach"

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item) {
    // console.log(item);
} )

// -------- using arrow => function----------

coding.forEach( (items) => {
    // console.log(items);
} )

//------------- passing a custom function as parameter in forEach( ) function ------------
function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

//Here, forEach function also has other parameters like "index" & "arr" i.e- the whole array list.

// ----------------- very important ------------------

const myCoding = [
    {
        languageName: "Javascript",
        languageFile: "js"
    },

    {
        languageName: "Java",
        languageFile: "java"
    },

    {
        languageName: "C++",
        languageFile: "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(`File name of ${item.languageName} is ${item.languageFile}`);
} )


// ** Most Important: forEach iterates arrays and print them, but dosen't return any value. more details in file "six.js"