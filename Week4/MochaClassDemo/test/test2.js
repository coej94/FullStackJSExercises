var {expect, assert} = require("chai");
//Mocha using chai.
describe('Array', function(){
  describe('Verify the #indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      expect([1,2,3].indexOf(0)).to.be.equal(-1);
      expect([1,2,3].indexOf(5)).to.be.equal(-1);
      expect([1,2,3].indexOf(3)).to.be.equal(2);
      assert.equal([1,2,3].indexOf(5), -1);
    })
  })
});        