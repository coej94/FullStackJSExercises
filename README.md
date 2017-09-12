# FullStackJSExercises
FullStackJS Solutions
##  Week 1:
Refreshing some vanilla JS
e.g Callbacks, .map, .filter, .reduce.
***
##  Week 2:
Learning about ES6/ES2015 features and "this" in JS.
***

# Period 1 Recap:
##  Explain differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.

Java er et compiled, objekt orienteret, programmeringssprog som skal køres igennem en virtuelmaskine for at blive skrevet om til maskinkode, som den specifikke computers processor kan køre. Det vil sige at programmet køres igennem og bliver tjekket igennem for fejl mens koden kompileres – så hvis man har lavet syntax fejl eller andet ballade, kaster java op.

Java er bruger typer, klasser og bruger konstruktører til at skabe objekter, som vi så kan arbejde med. Smider man ikke det ind i objekterne som de er forudbestemt til at tage ind, eller bruger man forkerte typer, brokker java sig også og man får typisk ikke lov at køre programmet.
Java har en masse, veldokumenteret kode som Oracle holder øje med. Dette kaldes i Java ”libraries”, som bruges til at implementer kode, som andre har skrevet for en. Så slipper man for at opfinde den dybe tallerken hver gang.
Java kan sammenlignes med den stramme, gamle bibliotekar, som holder fast på reglerne og ligeså snart du laver ballade, er hun straks over dig.

JavaScript er derimod et scripting language, som er skrevet helt igennem i tekst – det vil sige at ingen kompilering er nødvendigt. Da det kan køres direkte i alle de mest brugte browsere. JavaScript er i langt de fleste hjemmesider og er startede med blot at være et redskab til dom manipulation og frontend udvikling. Det har dog ændret sig i de seneste år og er nu både et stort frontend og backend-sprog. Den hurtige udvikling skyldes formegentlig at JavaScript er opensource.

JavaScript er i modsætning til Java mere en børnehaveklasselærer. Hvis du ikke selv husker dit semikolon smider JavaScript det selv ind. Hvis du laver ballade i din grammatik eller ikke har styr på din kode, så udfører vi det bare alligevel og så snakker vi ikke mere om det. Ingen fejlrapporter (næsten).  

I forhold til Concurrency problemet har java og javascript to vidt forskellige måder at løse det på. Mens Java kan køre flere tråde på en gang, bruger javascript et såkaldt event loop. Det vil sige at JavaScript events bliver sat i et kø system og bliver eksekveret et efter et.

Lad os sætte det nogle forskelle op i punktform.
-	Java er et ”statically typed language”; JavaScript er dynamisk.
-	I Java laver man klasser; i Javascript laver man prototype.
-	Java kræver et semikolon i slutningen af et non-block statement; Javascript sætter det selv hvis du glemmer det.
-	Java har et implicit this-scope for non-block og implicit class scope; Javascript har et implicit global scope.


##  Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node, in (many different) Browsers.

## ES6 (es2015) + ES7
Es6+ES7 er egentlig blot nye versioner af javascript, lavet med henblik på at gøre sproget smartere, og eventuelt rette op på ting der burde være lavet anderledes fra starten. Disse opdateringer har givet os arrow functions, Classes, Inheritance, promises, Generators og meget mere. Da det stadig er forholdsvis nyt og derfor ikke er implementeret i browserne endnu, bruger man en transpiler til at skrive det om til ES5 så det er læsbart for browseren. Vi bruger Babel, som er en af de førende transpilere på markedet. Med Babel kan vi bruge alle de nye features og alle browsere kan herefter læse vores kode – Alle er glade.

Node.js fungerer med ES6 out of the box (næsten). De steder hvor det ikke fungerer, er det ikke noget vi ikke kan løse med en transpiler. Det kan også køres i de nyeste versioner af React.js.

## TypeScript
Typescript er et gratis opensource sprog, udviklet og vedligeholdt af Microsoft. Det er en version af Javascript. Det gør det muligt at implementere statiske typer og det er muligt at implementere mange af de nye features fra ES6+7. Når sproget transpileres tjekker den for eventuelle fejl og mangler i din syntax og advarer dig, hvis noget ikke er som det skal være. Dog transpilerer den din kode uanset hvad, til trods for advarslerne – i modsætning til java som havde kastet op og nægtet at udføre det, før den fik nogle rettelser eller exceptions. Typescript kan også bruges i node.js med en typescript transpiler. Det er godt at kunne Typescript hvis man planlægger at skulle arbejde med Angular2, som er designet til at blive skrevet med Typescript, eller generelt hvis man gerne vil have lidt hjælp til at fange syntax fejl tidligt udviklingsforløbet. Når man skal transpilere typescript kan man enten bruge tsc komandoen i sin terminal eller man kan lave en typescript.config fil, hvilket anbefales hvis man har mange ts filer.  


## Explain generally about node.js, and when it “makes sense” and npm, and how it “fits” into the node echo system.
Node er en eventbaseret, asynkron I/O serverside platform som kører på Googles V8 engine. Node gør det muligt at bygge hurtige, skalerbare webapps. Node bruger en eventbaseret, non-blocking I/O model som gør det hurtigt og effektivt og det er derfor genialt til data-tunge realtime apps.

Node er ikke skrevet i JavaScript, som mange tror, men er derimod skrevet i C, hvilket er en af grundene til at det er så hurtigt. Selvom Node kører flertrådede processer under motorhjelmen, er det ikke en mulighed for brugeren af node. På overfladen kører node ”single-treaded” processer med callback funktioner. Dette kommer vi tilbage til senere.

### Pros and cons:
### Pros:
-	God håndtering af concurrency ved hjælp af asynkront eventdriven I/O
-	Gør det muligt at bruge javascript til både frontend og backend udvikling.
-	Gør det muligt at bruge NPM – Node Package Manager.
-	Stort Community og bred support og en masse kode er frit tilgængeligt i Opensource moduler.
### Cons:
-	Det er noget rod når man skal arbejde med relationelle databaser.
-	Nested callbacks kan gøre koden uoverskuelig.
-	Det kræver en bred forståelse af javascript.
-	Det er ikke det bedste til CPU-krævende opgaver.

## NPM:
NPM er en package manager som indeholder flere hundredetusind moduler, som man kan inkludere i sine node baserede projekter. NPM gør det nemt og hurtigt at bygge programmer i node, da man med en kommando kan indhente alle de moduler man skal bruge til f.eks. et react projekt. Node er særligt effektivt, da det kun indeholder de moduler man har brug for, hverken mere eller mindre.

## Explain about the Event Loop in Node.js
Når vi skal læse fra en fil eller læse en network stream, tager det noget tid, og derfor blokerer det. Derfor har man haft brug for tråde til at udføre disse processor. Men hvad gør node så? Node bruger ikke flere tråde, men bruger derimod et EventLoop som er single-threaded.

Når en tidskrævende funktion skal kaldes bliver opgaven smidt ind i evenloopet en callback. Det vil sige at når opgaven er sat i gang, kører eventloopet videre. Når opgaven er udført bliver funktionens callback udløst og funktionen kan færdiggøres. På den måde kan node køre videre selvom en funktion er ved at hente data fra nettet, fra en fil eller lignende.

## Explain (some) of the purposes with the tools Babel and WebPack, using examples from the exercises:
Babel er en transpiler, som laver ES6 kode om til ES5 kode, så alle browsere kan læse det. På den måde kan vi bruge alle de nyeste features, uden at de gør det mere besværligt for koden.
Webpack er en bundler, som samler javascript filer til brug i browser. Den er i stand til at bundle mange forskellige filer som ES moduler, commonJS og AMD. Webpack kan endda sættes til at loade forskellige dele af pakken asynkront. På den måde sløver man ikke loadtiden, når webappen skal hentes. Grunden til at man pakker det hele sammen til en fil, er at man på den måde mindsker mængeden af requests som skal udføres.
Explain the purpose of “use strict” and also Linters, exemplified with ESLint
Use strict og linters er til for at beskytte os mod os selv. De advarer os når vores syntax er forkert eller regner ud at det vi har skrevet måske ikke er det mener. På den måde hæver det vores kvaliteten af vores kode. Selvom det kan virke besværligt og tidskrævende at bruge ”use strict” kan det i sidste ende spare os en masse tid som vi ellers ville bruge på at debugge.

>## Variable/function-Hoisting:
```javascript 
console.log("Ex1:");
x = 5;
console.log('------------------------------------');
console.log("x should be 5, eventough it's not declared yet.");
console.log("x is:" + x);
console.log('------------------------------------');
var x;
console.log('------------------------------------');

//Hoisting ex2: Initialization
console.log("Ex2:");
console.log('------------------------------------');
console.log("y is NOT initialized yet - y is : " + y);
console.log('------------------------------------');
var y = 69;
console.log('------------------------------------');
console.log("Now we have initialized y, so y is now: " + y);
console.log('------------------------------------');
```
```
OUTPUT: 
Ex1:
------------------------------------
x should be 5, eventough it's not declared yet.
x is:5
------------------------------------
------------------------------------
Ex1:
------------------------------------
y is NOT initialized yet - y is : undefined
------------------------------------
------------------------------------
Now we have initialized y, so y is now: 69
------------------------------------
```
>## this in JavaScript and how it differs from what we know from Java/.net.
```javascript
/**
 * A function's this keyword behaves a little differently in JavaScript compared to other 
 * languages. In most cases, the value of this is determined by how a function is called. 
 * It can't be set by assignment during execution, and it may be different each time the 
 * function is called.
*/

console.log('------------------------------------');
console.log("This Explained:");
console.log('------------------------------------');

// Example 1 (Global Context):
// In the global execution context (outside of any function),
// this refers to the global object, whether in strict mode or not.
console.log(this.document === document); // true

// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
//Example 2 (Shadowing this):

function Car(make,model) {
  this.make = make;
  this.model = model;
  this.show = function(){setTimeout(function(){ //This function gets it's own "this"
    console.log(this.make + ", " + this.model);
  },0)};
}
var car = new Car("Volvo","V70");
car.show(); //undefined, undefined
```
```java
//In java "this"'s scope is global: 
private String name = "Christian";
public void setName(String name){
  name = this.name; /*name points to the argument in the "setName method*/ 
  //this.name points to the global "name" variable in java. 
}
```

>## Function Closures and the JavaScript Module Pattern
When using function closures, the idea is often to make a function available inside a particular scope only.

#### Example (Closure):
Vi giver variablen `scope` værdien `"I am global"` i det globale scope, og `"I am just a local"` i `getScope()`'s scope. 
```javascript
    var scope = "I am global";
    function getScope() {
        var scope = "I am local";
        return scope;
    }
    console.log(getScope());
    console.log(scope);
```

#### Example (JavaScript Module Pattern):
Her laver vi et modul som kan retunere en hilsen til en bestemt person med `greeting()` funktionen. Dette sker ved at give et navn med.
```javascript
    function greeter(name) {
        var name = name;

        return {
            greeting: function() {
                return "Hi " + name;
            }
        }
    }

    console.log(greeter("Christian").greeting());
```
- Immediately-Invoked Function Expressions (IIFE)
- JavaScripts Prototype
```javascript
  //Creating a prototype
  function Person(firstName, lastName, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
  }
  
  var person1 = new Person("Christian", "Jacobsen", 23);
  var person2 = new Person("Thomas", "Staal", 23);
  var person3 = new Person("Master", "Yi", 90);
```
- User defined Callback Functions
```javascript 
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Christian", "Ib", "Thomas"];
//Official filter:
let ofFilter = names.filter(name => name.length <= 3);

//myFilter
function myFilter(array, callback) {
    var filteredArray = [];
    array.forEach(function(input) {
        if(callback(input)) {
            filteredArray.push(input);
        }
    });
    return filteredArray;
}

 let hejFilter = myFilter(names, function(el) {
        if (el.length <= 3) return el;
 });

 console.log('------------------------------------');
 console.log("official Filter");
 console.log(ofFilter);
 console.log('------------------------------------');
 console.log("myFilter");
 console.log(hejFilter);
 console.log('------------------------------------');


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
```
- Explain the methods map, filter and reduce
```javascript
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Christian", "Ib", "Thomas"];
//Filter
let Filter = names.filter(name => name.length <= 3); //returns [Jan, Bo, Ib]

//Map
var upperNames = names.map(function(name){
    return name.toUpperCase(); //Returns [ 'LARS','JAN','PETER','BO','FREDERIK','CHRISTIAN','IB','THOMAS' ]
 }) 
  
//Reduce
var numbers = [1,2,3];
function getSum(total, num) {
    return total+num;
}

console.log('------------------------------------');
console.log("[1,2,3] is now reduced to:")
console.log(numbers.reduce(getSum));
console.log('------------------------------------');

```
- Provide examples of user defined reusable modules implemented in Node.js

```javascript
    function Person(name, age) {
        var name = name;
        var age = age;

        return {
            setName: function(value) {
                name = value;
            },
            setAge: function(value) {
                age = value;
            },
            getInfo: function() {
                return {
                    name: name,
                    age: age
                }
            }
        };
    }

    module.exports = Person;
```
>## ES6-7 and TypeScript
- Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.
## See week2 folder for exercise sheet - then the answers will make sense.
### ArrowFunction =>
```javascript
let evens = [0,2,4,6,8];
let odds = evens.map(v =>  v+1);

console.log('------------------------------------');
console.log(`Evens: ${evens}`);
console.log(`Odds: ${odds}`);
console.log('------------------------------------');
```

## ArrowFunction and This problem:
```javascript
//Exercise 3:
// a)
//One way with the old function
function Numbers(numbs) {
    this.nums = numbs;
    this.fives = []; 
    let hej = this;
    this.nums.forEach(function(v){
        if (v % 5 === 0) { 
            hej.fives.push(v);
        } 
    });
};
var numbers = new Numbers([1,3,5,10,14,20,33,50]); 
console.log('------------------------------------');
console.log(numbers.fives);
console.log('------------------------------------');

//another way with the arrow Function. Arrow functions are not always gods gift to humanity.
//See "Arrow Confusion"
function Numbers(numbs) {
    this.nums = numbs;
    this.fives = []; 
    this.nums.forEach((v) => {
        if (v % 5 === 0) { 
            this.fives.push(v);
        } 
    });
};
var numbers = new Numbers([1,3,5,10,14,20,33,50]); 
console.log(numbers.fives);

// b)
//Function way
console.log('------------------------------------');
console.log(`Old fasioned function way`);
console.log('------------------------------------');
var counter = {
    count: 0,
    inc: function () {
      this.count++;
    }
  }
var func = counter.inc; //Store "reference" to inc
func();
console.log(`First result: ${counter.count}`); //Still zero
counter.inc();
console.log(`Second result: ${counter.count}`); //Now one


// Arrow way
console.log('------------------------------------');
console.log(`Arrow function way`);
console.log('------------------------------------');
var counter = {
    count: 0,
    inc: () => {
      this.count++;
    }
  }
var func = counter.inc; //Store "reference" to inc
func();
console.log(`First result: ${counter.count}`); //Still zero
counter.inc();
console.log(`Second result: ${counter.count}`); //and still zero.

```
## Template iterals.
```javascript
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`
console.log('------------------------------------');
console.log(message);
console.log('------------------------------------');
```

## Rest operator
```javascript
console.log(`Exercise 5
a)`);
function f(x,y,...rest){ 
    console.log(`sum: ${rest.length}`);
    rest.forEach((item, index) => console.log(`rest value ${index+1} is a ${item.constructor.name}`));
}
console.log(f(5,2,true,2,"hello World",[1,2,3],new Date(),{}));

console.log("b)");
//To test it works!
var rest = [true,2,"hello World",[1,2,3],new Date(),{}]; 
var restParams = [ ...rest]; 
console.log(f(5,2,...restParams));
```

## Shorthand notation:
```javascript
Shorthand notation
console.log("exercise 6:");
//Initializing
let fName = "Kurt";
let lName = "Wonnegut";
let age = 98

//this is easier to write instead of "this.fname = fname etc.."
let man = {
    fName: fName,
    lName: lName,
    age: age
};

//This line shows us the two ways we can acces the variables of our object.
console.log('------------------------------------');
console.log(`Mr. ${man['fName']} ${man.lName} is ${man.age} years old!`);  
console.log('------------------------------------');
```
## Destructing assignment:
```javascript
  
//a)
let fName1 = "Kurt", lName1 = "Wonnegut";
[fName1, lName1]=[lName1, fName1];

console.log(`First: ${fName1}, Last: ${lName1}`);


//b)
function getPerson(){
    return {
      firstName: "Kurt",
      lastName: "Wonnegut",
      gender : "Male",
      email: "kurt@wonnegut.dk",
      phone: "12345",
    }
}
//I'm stuck with this one - Moving further.
let lastnameAndPhone = {lastName: getPerson["lastName"],phone: getPerson.phone}

console.log('------------------------------------');
console.log(lastnameAndPhone);
console.log('------------------------------------');
```

- Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.
Es2015 module import and export example:

Export.
```
//------ lib.js ------
    export const sqrt = Math.sqrt;
    export function square(x) {
        return x * x;
    }
    export function diag(x, y) {
        return sqrt(square(x) + square(y));
    }
```
Import.
```
//------ main.js ------
    import { square, diag } from 'lib';
    console.log(square(11)); // 121
    console.log(diag(4, 3)); // 5
```
- Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.
En af de bedre ting ved ES6 er at det er blevet mere OO og er begyndt at ligne sprog som java på mange måder.

Class definition.
```
class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}
```
Class inheritance.
```
class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y)
        this.width  = width
        this.height = height
    }
}
class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
}
```

- Provide examples with es6, running in a browser, using Babel and Webpack
- Provide an number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics

```javascript
//Initially we are defining the standards for a book using an interface.
interface IBook {
    title: string,
    //This "readonly" thing makes the prop "private" which makes it impossible for
    //me to change the name to bob as i'm trying to do in line 22.
    readonly author: string, 
    published?: Date, //The quotationmark makes the property optional.
    pages?: number
}

//Then we are creating a book object.
let howToSurvive = {
    title: "How To survive FullStack Javascript", 
    author: "Christian Øst-Jacobsen",
    published: getDate(),
    pages: 2000
}
//Creating a function which takes our IBook as an argument and logs a string,
//with information about any book that follows our standard.
function getBook(book: IBook){
    //This line will fail because author is a readonly property.
    //console.log( `The book ${book.title}, was written by ${book.author="bob"}, the ${book.published}, and has ${book.pages} pages.`);
    console.log( `The book ${book.title}, was written by ${book.author}, the ${book.published}, and has ${book.pages} pages.`);
    
}
//Then we call the function to get a result out in the console.
getBook(howToSurvive);

//Now we are creating a book class (THE JAVA WAY ☕️😈)
class Book implements IBook{
    title: string;
    author: string; 
    published: Date; //We are cheating a bit, as we dont want another Date error.
    pages: number;

    constructor(book_title: string, book_author: string, release_date: Date, total_pages: number){
        this.title = book_title;
        this.author = book_author;
        this.published = release_date;
        this.pages = total_pages;
    }

    book_info(): void {
        console.log(`This book has ${this.pages} pages, is written by ${this.author}, is released: ${this.published} and its name is ${this.title}`);
        
    }
}
let Quack = new Book("QuackBook Pro", "Donald Quack", getDate(), 1234)

Quack.book_info();
//IT WORKS! We still have some problems with Date => String because we dont want
//the ugly time format Date() gives us - else everything is just fine. 

//This function gives us a clener format of the date of to day.
//TS will complain because we are converting the date into a string, 
//but the interface expects a Date. (No idea how to get the string back 
//to date format again - Maybe we'll figure it out someday.)
function getDate() {
    var now = new Date();
    var dd = now.getDate();
    var mm = now.getMonth()+1; //January is 0!
    var yyyy = now.getFullYear();
    var today = dd+'/'+mm+'/'+yyyy;
    return today
}
```
Generics: 
```javascript
  // The <T> after the function name symbolizes that it's a generic function.
  // When we call the function, every instance of T will be replaced with the actual provided type.

 // Receives one argument of type T,
 // Returns an array of type T.

 function genericFunc<T>(argument: T): T[] {    
    var arrayOfT: T[] = [];    // Create empty array of type T.
    arrayOfT.push(argument);   // Push, now arrayOfT = [argument].
    return arrayOfT;
  }
  
  var arrayFromString = genericFunc<string>("beep");
  console.log(arrayFromString[0]);         // "beep"
  console.log(typeof arrayFromString[0])   // String
  
  var arrayFromNumber = genericFunc(42);
  console.log(arrayFromNumber[0]);         // 42
  console.log(typeof arrayFromNumber[0])   // number
```
