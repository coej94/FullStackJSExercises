let person = {fName: "Christiann", lName: "Poulsen" }
console.log(person);

//This will mutate the object for good. - we DON'T want this.
function changePerson(p) {
    p.lName = "Jacobsen";
    return p;
}

//This creates a new object with data from the old object. 
function changeImmutable(p) {
    //One way: Assign method
    //let newP = Object.assign({}, p, {lName:"hej"})

    //Another way: Spread operator (requires bable or node 8)
    let newP ={...p, lName="Hansen"}; 
    return newP;
}

//Lets try this function.
let p2 = changeImmutable(person)

console.log(p2);
console.log(person)