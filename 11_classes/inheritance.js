class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is: ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const newTeacher = new Teacher("Hitesh Choudhary", "chai@teacher.com", "123");

newTeacher.addCourse();
newTeacher.logMe();
const garamDoodh = new User("Hot Coco Milk");
garamDoodh.logMe();