/*
class Student {
    fullname: string;
    constructor(public firstname: string, public middleIntial: string, 
        public lastname: string){
        this.fullname = firstname + " " + middleIntial + " " + lastname;
    }
}

interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person: Person) {
    return `Hello, ${person.firstname} ${person.lastname}`;
}

var user = new Student("Christian", "Ø.", "Jacobsen");

document.body.innerHTML = greeter(user);
*/

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(student: Student) {
    return "Hello, " + student.firstName + " " + student.middleInitial +" "+student.lastName;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);