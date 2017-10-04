/*
class Student {
    fullname: string;
    constructor(public firstname: string, public middleIntial: string, public lastname: string){
        this.fullname = firstname + " " + middleIntial + " " + lastname;
    }
}

interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

var user = {firstname: "christian", lastname: "jacobsen"}

document.body.innerHTML = greeter(user);
*/
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(student) {
    return "Hello, " + student.firstName + " " + student.middleInitial + " " + student.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
//# sourceMappingURL=greeter.js.map