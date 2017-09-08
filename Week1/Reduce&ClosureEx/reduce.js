//Reducer 
var numbers = [1,2,3];

function getSum(total, num) {
    return total+num;
}

console.log('------------------------------------');
console.log("[1,2,3] is now reduced to:")
console.log(numbers.reduce(getSum));
console.log('------------------------------------');

//Closure with counter.
var add = (function(){
  var counter = 0;
  return function plusOne(){return counter+=1;};
})();

var myFunction = function(){
  document.getElementById("demo").innerHTML = add();
}
