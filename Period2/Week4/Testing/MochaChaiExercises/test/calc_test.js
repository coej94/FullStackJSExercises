var calc = require("../lib/calculator.js");
var {expect, assert} = require("chai");

describe("Calculator", () => {
    describe("Devide()", ()=>{
        it("retuns 4 / 2 = 2", (done)=>{
            assert.equal(calc.div(4,2), 2);
            done();
        });
         it("returns an error when dividing by zero",()=> {
            
            assert.throw(()=>{
                calc.div(4,0)
            }, Error, "Attempt to divide by Zero");
        })
    });
    describe("Multiply()", ()=>{
        it("return 2*2 =4", (done)=>{
            assert.equal(calc.mul(2,2),4);
            done();
        });
    });
    describe("Add()", () =>{
        it("return 2+2=4", (done)=>{
            //another way to test with Expect instead of assert.
            let result = calc.add(2,2);
            expect(result).to.equal(4);
            //assert.equal(calc.add(2,2), 4); //short way
            done();
        });
    });
    describe("Substract()", ()=>{
        it("return 3-2=1", (done)=>{
            assert.equal(calc.sub(3,2), 1);
            done();
        });
    });
});
