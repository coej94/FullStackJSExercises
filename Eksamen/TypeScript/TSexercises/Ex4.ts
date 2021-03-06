interface myFunc {
    (a: string, b: string, c: string): Array<string>
}

let aFunction: myFunc;
aFunction = function(a: string, b: string, c: string) {
    let result = [a,b,c];
    return result;
}

console.log(aFunction("hej", "med", "dig"));

let anotherFunction: myFunc;
anotherFunction = function(d: string, e: string, f: string) {
    let arr = [d,e,f];
    let res = [];
    arr.forEach(element => {
        res.push(element.toUpperCase());
    });
   
    return res;
}

console.log(anotherFunction("hej", "med", "dig"));

let f2 = function logger(f1: myFunc){
    let [a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}

console.log();
