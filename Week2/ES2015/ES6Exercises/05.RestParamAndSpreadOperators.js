//Exercise 5 Rest Parameters and Spread Operators

console.log(`Exercise 5
a)`);
function f(x,y,...rest){ 
    console.log(`sum: ${rest.length}`);
    rest.forEach((item, index) => console.log(`rest value ${index+1} is a ${item.constructor.name}`));
}
console.log(f(5,2,true,2,"hello World",[1,2,3],new Date(),{}));

console.log("b)");
//To test it works!
var rest = [true,2,"hello World",[1,2,3],new Date(),{}]; 
var restParams = [ ...rest]; 
console.log(f(5,2,...restParams));

/* FIX THIS!
console.log("c)");
var chars = [... f(5,2,...restParams)];
console.log('------------------------------------');
console.log(chars); //Why does this throw an error?
console.log('------------------------------------');
*/