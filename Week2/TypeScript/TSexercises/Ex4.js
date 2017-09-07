var aFunction;
aFunction = function (a, b, c) {
    var result = [a, b, c];
    return result;
};
console.log(aFunction("hej", "med", "dig"));
var anotherFunction;
anotherFunction = function (d, e, f) {
    var arr = [d, e, f];
    var res = [];
    arr.forEach(function (element) {
        res.push(element.toUpperCase());
    });
    return res;
};
console.log(anotherFunction("hej", "med", "dig"));
var f2 = function logger(f1) {
    var _a = ["A", "B", "C"], a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
};
console.log(f2);
//# sourceMappingURL=Ex4.js.map