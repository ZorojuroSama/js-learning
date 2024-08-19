class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const userShubh = new User("shubham", "shubham@falana.com", "KuchBhi123")

console.log(userShubh.encryptPassword());
console.log(userShubh.changeUsername());



// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
   return `${this.username.toUpperCase()}`
}

const user2 = new User("lamfatt", "lamfatwa@chilanwa.com", "fhiweh422")

console.log(user2.changeUsername());
console.log(user2.encryptPassword());
