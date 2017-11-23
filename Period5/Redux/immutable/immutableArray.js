const names = ["aa", "bb", "cc", "dd"]

//const n2 = names;

//Mutable
//n2.push("hej");

//immutable
const n2 = [...names.slice(0,2), "ee", ...names.slice(2)];
//const n2 = [...names, "EE"]


const n3 = n2.map(n=>n.toUpperCase()); 

console.log("Equals?", names === n2);
console.log(n2);
console.log(names);
console.log('------------------------------------');
console.log(n3);
console.log('------------------------------------');