//Exercise 1
var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];

function threeOrLess(name){
    return name.length <= 3;
}
var shortNames = names.filter(threeOrLess);
console.log(shortNames);

var UpperNames = names.map(function(name){
    return name.toUpperCase();
})

console.log(UpperNames);

//Ex 2
