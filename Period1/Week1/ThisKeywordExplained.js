/**
 * A function's this keyword behaves a little differently in JavaScript compared to other 
 * languages. In most cases, the value of this is determined by how a function is called. 
 * It can't be set by assignment during execution, and it may be different each time the 
 * function is called.
*/

console.log('------------------------------------');
console.log("This Explained:");
console.log('------------------------------------');

// Example 1 (Global Context):
// In the global execution context (outside of any function),
// this refers to the global object, whether in strict mode or not.
console.log(this.document === document); // true

// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
//Example 2 (Shadowing this):

function Car(make,model) {
  this.make = make;
  this.model = model;
  this.show = function(){setTimeout(function(){ //This function gets it's own "this"
    console.log(this.make + ", " + this.model);
  },0)};
}
var car = new Car("Volvo","V70");
car.show(); //undefined, undefined

//In java "this"'s scope is global: 
private String name = "Christian";
public void setName(String name){
  /*Name points to the argument in the "setName method->*/ name = this.name; 
  //this.name points to the global "name" variable in java. 
}
