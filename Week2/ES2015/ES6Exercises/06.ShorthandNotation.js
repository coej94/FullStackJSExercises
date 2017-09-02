//Exercise 6: Shorthand notation
console.log("exercise 6:");
//Initializing
let fName = "Kurt";
let lName = "Wonnegut";
let age = 98

//this is easier to write instead of "this.fname = fname etc.."
let man = {
    fName: fName,
    lName: lName,
    age: age
};

//This line shows us the two ways we can acces the variables of our object.
console.log('------------------------------------');
console.log(`Mr. ${man['fName']} ${man.lName} is ${man.age} years old!`);  
console.log('------------------------------------');
