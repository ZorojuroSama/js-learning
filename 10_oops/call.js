function setUsername(username){
    //complex DB calls
    this.username = username
}

function createUser(username, email, password){
    setUsername.call(this,username);
    this.email = email;
    this.password = password;
}

const newUser = new createUser("Shubh", "shubh@x.com", "123");

console.log(newUser);



/*
.call & 'this' current execution context

when we call a function inside another function, the "this" keyword (to reference current context) doesn't return any value due to which the outer function doesn't get the returned value form inner function.

this basically happens due to execution context of the functions.

jab humne setUsername function mein this.username diya to after excution uska reference wahi khatam hogya.

aur jab hum setUsername() ko outer function ke andar call karenge to uss function ke pass koi this reference hoga hi nhi.
isiliye jab humne sirf setUsername(username) likha to uske paas koi username ka reference hi nhi tha.


** setUsername.call(this, username) **

.call method use krte hain function ko explicitly call krne ke liye aur uske parameters mein "this" use krte hain taaki inner function ke references outer function ke this mein hold ho jaye.

*/