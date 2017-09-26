var expect = require("chai").expect;

describe("Testing async behaviour", function(){
  var foo = false;
  before(function(done){
    setTimeout(function(){
      foo = true;
      done();  //Test will fail without this because before is called and then just run the test.
    }, 1000);
  });
  it("should pass (with done called)", function(){
    expect(foo).to.equal(true);
  });
});