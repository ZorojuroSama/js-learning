// const tinderUser = new Object() ----> Singleton object
// const tinderUser = {} ----> non-singleton

// nested object --->

const User1 = {
    email: "shubham@google.com",
    fullname: {
        userfullname:{
            firstname: "Shubham",
            lastname: "Raj"
        }
    }
}

// console.log(User1.fullname.userfullname.lastname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

// combining objects --->

const comObj = {obj1, obj2, obj3} // not a good syntax
// console.log(comObj);

// combining multiple objects using .assign() method.

const obj4 = Object.assign({}, obj1, obj2, obj3) 
// assign() --> copies all key/value pairs of one or more objects to a target object & returns a modified target object. 
// Here, {} is used as a target object to store the data from other objects.
// console.log(obj4);

// mostly used syntax to combine objects is spread(...) operator.
// modern syntax, easy and simple

const combined_obj = {...obj1, ...obj2, ...obj3}
// console.log(combined_obj);

//------------------------------------------------------------------------------------------

const tinderUser = {
    id: "123bkl",
    name: "Sammy",
    isLoggedIn: false
}

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

const users = [
    {
        id: 1,
        email: "shubh@gmail.com"
    },
    {
        id: 2,
        email: "shubh@gmail.com"
    },
    {
        id: 3,
        email: "shubh@gmail.com"
    },
    {
        id: 4,
        email: "shubh@gmail.com"
    },
]

// console.log(users[2].email);

// console.log(Object.keys(users[2]));



 //---------------Destructuring of objects------------


 const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor: "hitesh"
 }

//  course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);

