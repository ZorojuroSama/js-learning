// let myName = "Shubham     ";

// console.log(myName.trim().length);

let myHeros = ["Thor", "Spiderman", "Hulk"];

let powers = {
  Thor: "hammer",
  Spiderman: "sling",
  Hulk: "smash",

  getSpiderPower: function () {
    console.log(`spidy power is: ${this.Spiderman}`);
  },
};

Object.prototype.shubh = function () {
  console.log(`Shubham is present in all objects.`);
};

Array.prototype.HeyShubh = function () {
  console.log(`Only present in array objects.`);
};

// powers.shubh();
// myHeros.shubh();
// myHeros.HeyShubh();

// this function is only present in arrays. Arrays are lower in hierarchy and it's properties are only limited to themselves.

// powers.HeyShubh();

// But when we explicitly inject an property in Objects, then that property will be accessible by other lower hierarchy elements.

/*

strings  ------------\
                      \
arrays    ---------------- Objects --------- Null
                    /
functions --------/

*/

// Inheritence

const User = {
    name:"user",
    email:"user@mail.com"
}

const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport,
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "Kakashi     "

String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`)
}

anotherUserName.trueLength();
"pakchikpakrajababu".trueLength();
