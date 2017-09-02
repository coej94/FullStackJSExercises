//Exercise 7 Destructing assignment:
//a)
let fName1 = "Kurt", lName1 = "Wonnegut";
[fName1, lName1]=[lName1, fName1];

console.log(`First: ${fName1}, Last: ${lName1}`);


//b)
function getPerson(){
    return {
      firstName: "Kurt",
      lastName: "Wonnegut",
      gender : "Male",
      email: "kurt@wonnegut.dk",
      phone: "12345",
    }
}
//I'm stuck with this one - Moving further.
let lastnameAndPhone = {lastName: getPerson["lastName"],phone: getPerson.phone}

console.log('------------------------------------');
console.log(lastnameAndPhone);
console.log('------------------------------------');