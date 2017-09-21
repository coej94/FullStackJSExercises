var {expect} = require("chai");
var tools = require("../lib/tools");
var nock = require("nock");

describe("Tools", function(){
    describe("printName()", function(){
        it("should print lastname first",() => {
    
            var results = tools.printName({first: "Christian", last: "Jacobsen"});
            expect(results).to.equal("Jacobsen, Christian");
        });
    });

    describe("loadWiki()", function() {
        before(() => {
            nock("https://en.wikipedia.org")
                .get("/wiki/Abraham_Lincoln")
                .reply(200, "Mock Abraham Lincoln Page");
        });

        it("Loads Abraham Lincoln's Wikipedia Page", (done) =>{
            tools.loadWiki({first: "Abraham", last: "Lincoln"}, (html) => {
                expect(html).to.equal(" Mock Abraham Lincoln Page");
                done();
            });
        });
    });


});