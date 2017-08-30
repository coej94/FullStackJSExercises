var number = [1,2,3,4,5];
//ES5
var times10 = number.map(function(num){
    return num*10;
});
// ES6 way:
//var times10 = number.map(num => num*10);

console.log('------------------------------------');
console.log(times10);
console.log('------------------------------------');

function myMap(arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        temp[i] = callback(arr[i]);
    }
    return temp;
}

var timesTen = myMap(number, function (num) {
    return num*10;
})

console.log('------------------------------------');
console.log(timesTen);
console.log('------------------------------------');


//Reducer

var numbers = [1,2,3,4,5];

var reducer = function(accumulator, item) {
 return accumulator + item;    
};

var initvalue = 0;
var result = reducer(numbers);
console.log('------------------------------------');
console.log(result);
console.log('------------------------------------');


var members = [
    {name:"Lars",age: 1},
    {name:"Peter",age: 43}, 
    {name:"Jan",age: 98}, 
    {name:"Bo",age: 15}
];

var reducer2 = function(accumulator, member, index, arr) {
    var temp = accumulator + member.age;
    if (index === arr.length-1) {
        return temp/ arr.length;
    }
    return temp;
};
var init = 0;

var result = members.reduce(reducer2, init);

console.log('------------------------------------');
console.log(result);
console.log('------------------------------------');