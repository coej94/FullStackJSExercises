/**
 * Hoisting is JavaScript's default behavior of moving declarations to the top.
 * 
 * In JavaScript, a variable can be declared after it has been used.
 * In other words; a variable can be used before it has been declared.
 * 
 * JavaScript only hoists declarations, not initializations.
 */

//Hoisting ex1: Decleration 
console.log("Ex1:");
x = 5;
console.log('------------------------------------');
console.log("x should be 5, eventough it's not declared yet.");
console.log("x is:" + x);
console.log('------------------------------------');
var x;
console.log('------------------------------------');

//Hoisting ex2: Initialization
console.log("Ex1:");
console.log('------------------------------------');
console.log("y is NOT initialized yet - y is : " + y);
console.log('------------------------------------');
var y = 69;
console.log('------------------------------------');
console.log("Now we have initialized y, so y is now: " + y);
console.log('------------------------------------');