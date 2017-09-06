//Ex2
//Executing and playing around with examples from TS in 30 Minutes
//https://tutorialzine.com/2016/07/learn-typescript-in-30-minutes

//Static Typing
var burger: string = 'hamburger',     // String 
calories: number = 300,           // Numeric
tasty: boolean = true;            // Boolean

// Alternatively, you can omit the type declaration:
// var burger = 'hamburger';

// The function expects a string and an integer.
// It doesn't return anything so the type of the function itself is void.

function speak(food: string, energy: number): void {
console.log(`Our ${food} has ${energy} calories`); //<-- Apparently we can use template Iterals in TS! :D
}

speak(burger, calories);


// Interfaces

interface Food {
    name: string;
    calories: number;
}

// We tell our function to expect an object that fulfills the Food interface. 
// This way we know that the properties we need will always be available.
// If I create two functions with same name it TS throws up 🤢
function speak2(food: Food): void{ 
  console.log("Our " + food.name + " has " + food.calories + " calories. 🤢");
}

// We define an object that has all of the properties the Food interface expects.
// Notice that types will be inferred automatically.
var ice_cream = {
  name: "ice cream", 
  calories: 200
}

speak2(ice_cream);

// Classes and OOP:
class Menu {
    // Our properties:
    // By default they are public, but can also be private or protected.
    items: Array<string>;  // The items in the menu, an array of strings.
    pages: number;         // How many pages will the menu be, a number.
  
    // A straightforward constructor. 
    constructor(item_list: Array<string>, total_pages: number) {
      // The this keyword is mandatory.
      this.items = item_list;    
      this.pages = total_pages;
    }
  
    // Methods
    list(): void {
      console.log("Our menu for today:");
      for(var i=0; i<this.items.length; i++) {
        console.log(this.items[i]);
      }
    }
} 
  
// Create a new instance of the Menu class.
  var sundayMenu = new Menu(["pancakes","waffles","orange juice"], 1);
  
    // Call the list method.
    sundayMenu.list();

    // Inheritance 
    class HappyMeal extends Menu {
    // Properties are inherited
  
    // A new constructor has to be defined.
    constructor(item_list: Array<string>, total_pages: number) {
      // In this case we want the exact same constructor as the parent class (Menu), 
      // To automatically copy it we can call super() - a reference to the parent's constructor.
      super(item_list, total_pages);
    }
  
    // Just like the properties, methods are inherited from the parent.
    // However, we want to override the list() function so we redefine it.
    list(): void{
      console.log("Our special menu for children:");
      for(var i=0; i<this.items.length; i++) {
        console.log(this.items[i]);
      }
  
    }
}
  
// Create a new instance of the HappyMeal class.
  var menu_for_children = new HappyMeal(["candy","drink","toy"], 1);
  
  // This time the log message will begin with the special introduction.
  menu_for_children.list();

  //Generics
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


//Modules
import sayHi = require('./exporter');
sayHi();