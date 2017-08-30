
//Exercise 1
var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];
//long, seperated version:
//First define the function
function threeOrLess(name){
    return name.length <= 3;
}

var shortNames = names.filter(threeOrLess);
console.log(shortNames);

//Short version with callback:
var shortNames2 = names.filter(function(name){
    if(name.length <= 3){
        return true; 
    }
    return false;
}); 
console.log(shortNames2);

//Uppercase using map:
var UpperNames = names.map(function(name){
    return name.toUpperCase();
})
console.log(UpperNames);


/////////////////////////////////////////////////////////////////////////////////////

//Exercise 2:

 //myMap:
 
 //Uppercase using map:
 var upperNames = names.map(function(name){
    return name.toUpperCase();
 })
 // ES6 way:
 //var upperNames = number.map(name => name.toUpperCase());
 
 function myMap(arr, callback) {
     var temp = [];
     for (var i = 0; i < arr.length; i++) {
         temp[i] = callback(arr[i]);
     }
     return temp;
 }
 
 var myUpperNames = myMap(names, function (name) {
     return name.toUpperCase();
 })
 
 console.log('------------------------------------');
 console.log("official map");
 console.log(upperNames);
 console.log('------------------------------------');
 console.log("myMap");
 console.log(myUpperNames);
 console.log('------------------------------------');

/////////////////////////////////////////////////////////////////////////////////////


//Exercise 4:
//Create a Unordered list of names (see line 2) using a map function. 

    var html = names.map(function(name){
        return "<li>" + name + "</li>";
    }).join("");
    document.getElementById("indhold").innerHTML = html;
    
    // Initializing contactlist.
    var contactList = [
        {name:"Lars",phone:"1234567"},
        {name:"Peter",phone:"675843"}, 
        {name:"Jan",phone:"98547112"}, 
        {name:"Bo",phone:"11179345"}
    ];
    //Here we convert the contactlist into a tabel.
    var contactListTabel = contactList.map(function(person) {
        return "<tr><td>" + person.name + "</td><td>" + person.phone + "</td></tr>"
    }).join("");
    document.getElementById("tab").innerHTML= contactListTabel;
    
//ES6
//var shortNameList = contactList.filter(person = person.name.length <= 3);
//ES5
var shortNameList = contactList.filter(function(person){
    if(person.name.length <= 3){ 
        return person;
    } 
});

//This function is used when a user push the button.
function myFunc(){
    var shortNameTabel = shortNameList.map(function(person) {
        return "<tr><td>" + person.name + "</td><td>" + person.phone + "</td></tr>"
    }).join("");
    document.getElementById("tab").innerHTML= shortNameTabel;
}

        ///////////////////// Work Space /////////////////////

        /*//MyFilter
function myFilter(arr, callback){
    //var unfilteredArr = new Array();
    var filteredArr = new Array();
    arr.forEach(function(element) {
        if (callback() = true) {
            filteredArr.push(element);
        }
    })
    // for (var j = 0; j < unfilteredArr.length-1; j++) {
    //     var element = unfilteredArr[j];
    //     if(element !== undefined){
    //         filteredArr.push(unfilteredArr[j]);
    //     }
    // }
    return filteredArr;
 };

 var myFilt = myFilter(names, function(name){
   if (name.length <= 3) {
       return name;
   }
 });
 console.log('------------------------------------');
 console.log("Official filter result:");
 console.log(shortNames);
 console.log('------------------------------------');
 console.log("MyFilter Result"); 
 console.log(myFilt);
 console.log('------------------------------------');
 */