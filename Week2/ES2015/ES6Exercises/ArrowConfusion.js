
/**
 * This exampel shows that arrow function 
 * "this" always points to the outer scope of the module.
 * 
 */

// run this in node v4 to see the "expected" behavior

this.test = "attached to the module";

var foo = {
  test: "attached to an object"
};

// a method to create methods
foo.method = function(name, cb){
  this[name] = cb;
};

// use an arrow function and get
// lexical analysis of "this"
foo.method("bar", () => {
  // not what you expected, maybe?
  console.log(this.test); 
});
foo.bar();

//If we use function the "old fasioned" way, we get this (no pun intented) result.
foo.method("bar", function() {
    // not what you expected, maybe?
    console.log(this.test); 
  });
foo.bar();

//Now lets try with bind to force arrow "this" to be : 

foo.method = function(name, cb){
  
  // bind the value of "this" on the method
  // to try and force it to be what you want
  this[name] = cb.bind(this);
  
};

foo.method("bar", () => {
  console.log(this.test); 
});

foo.bar();