const fetch = require("node-fetch");

/*
fetch("https://api.icndb.com/jokes/random").then(res=>res.json())
.then(data => 
    console.log(data.value.joke)
);
*/
let manyPromises = [];
for (let i = 0; i < 50; i++) {
    manyPromises.push(fetch("https://api.icndb.com/jokes/random").then(res=>res.json()));   
}
/*
Promise.all(manyPromises)
.then(all=>all.map(objJoke=>objJoke.value.joke)); 
*/

/*
Promise.all(manyPromises)
.then(all=>console.log(all.map(objJoke=>objJoke.value.joke).join("\n\n"))); 
*/

Promise.all(manyPromises)
.then(all=>console.log(all.filter(o=>o.value.joke.length <80).map(oj=>oj.value.joke)));