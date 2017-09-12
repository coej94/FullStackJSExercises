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

//another way with the arrow Function. Arrow functions are not always gods gift to humanity.
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
