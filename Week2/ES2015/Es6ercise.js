//Just me fooling around. 
var str = "String";
var greeting = `Hello! I'm using templates to create this ${str}.` //<-- This is called Template Iterals

const hello = () => { //This is an arrowFunction
    console.log('------------------------------------');
    console.log(greeting);
    console.log('------------------------------------');
};
hello();


//Exercise 2:
let evens = [0,2,4,6,8];
let odds = evens.map(v =>  v+1);

console.log('------------------------------------');
console.log(`Evens: ${evens}`);
console.log(`Odds: ${odds}`);
console.log('------------------------------------');


//Exercise 3:
// a)
//One way with the old function
function Numbers(numbs) {
    this.nums = numbs;
    this.fives = []; 
    let hej = this;
    this.nums.forEach(function(v){
        if (v % 5 === 0) { 
            hej.fives.push(v);
        } 
    });
};
var numbers = new Numbers([1,3,5,10,14,20,33,50]); 
console.log('------------------------------------');
console.log(numbers.fives);
console.log('------------------------------------');

//another way with the arrow Function. Arrow functions are now always gods gift to humanity.
//See "Arrow Confusion"
function Numbers(numbs) {
    this.nums = numbs;
    this.fives = []; 
    this.nums.forEach((v) => {
        if (v % 5 === 0) { 
            this.fives.push(v);
        } 
    });
};
var numbers = new Numbers([1,3,5,10,14,20,33,50]); 
console.log(numbers.fives);

// b)
//Function way
console.log('------------------------------------');
console.log(`Old fasioned function way`);
console.log('------------------------------------');
var counter = {
    count: 0,
    inc: function () {
      this.count++;
    }
  }
var func = counter.inc; //Store "reference" to inc
func();
console.log(`First result: ${counter.count}`); //Still zero
counter.inc();
console.log(`Second result: ${counter.count}`); //Now one


// Arrow way
console.log('------------------------------------');
console.log(`Arrow function way`);
console.log('------------------------------------');
var counter = {
    count: 0,
    inc: () => {
      this.count++;
    }
  }
var func = counter.inc; //Store "reference" to inc
func();
console.log(`First result: ${counter.count}`); //Still zero
counter.inc();
console.log(`Second result: ${counter.count}`); //and still zero.

//Exercise 4 Template Iterals Example
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`
console.log('------------------------------------');
console.log(message);
console.log('------------------------------------');

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

