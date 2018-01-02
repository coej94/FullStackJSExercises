"use strict";
//Ex2
//Executing and playing around with examples from TS in 30 Minutes
//https://tutorialzine.com/2016/07/learn-typescript-in-30-minutes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//Static Typing
var burger = 'hamburger', // String 
calories = 300, // Numeric
tasty = true; // Boolean
// Alternatively, you can omit the type declaration:
// var burger = 'hamburger';
// The function expects a string and an integer.
// It doesn't return anything so the type of the function itself is void.
function speak(food, energy) {
    console.log("Our " + food + " has " + energy + " calories"); //<-- Apparently we can use template Iterals in TS! :D
}
speak(burger, calories);
// We tell our function to expect an object that fulfills the Food interface. 
// This way we know that the properties we need will always be available.
// If I create two functions with same name it TS throws up 🤢
function speak2(food) {
    console.log("Our " + food.name + " has " + food.calories + " calories. 🤢");
}
// We define an object that has all of the properties the Food interface expects.
// Notice that types will be inferred automatically.
var ice_cream = {
    name: "ice cream",
    calories: 200
};
speak2(ice_cream);
// Classes and OOP:
var Menu = /** @class */ (function () {
    // A straightforward constructor. 
    function Menu(item_list, total_pages) {
        // The this keyword is mandatory.
        this.items = item_list;
        this.pages = total_pages;
    }
    // Methods
    Menu.prototype.list = function () {
        console.log("Our menu for today:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return Menu;
}());
// Create a new instance of the Menu class.
var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);
// Call the list method.
sundayMenu.list();
// Inheritance 
var HappyMeal = /** @class */ (function (_super) {
    __extends(HappyMeal, _super);
    // Properties are inherited
    // A new constructor has to be defined.
    function HappyMeal(item_list, total_pages) {
        // In this case we want the exact same constructor as the parent class (Menu), 
        // To automatically copy it we can call super() - a reference to the parent's constructor.
        return _super.call(this, item_list, total_pages) || this;
    }
    // Just like the properties, methods are inherited from the parent.
    // However, we want to override the list() function so we redefine it.
    HappyMeal.prototype.list = function () {
        console.log("Our special menu for children:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return HappyMeal;
}(Menu));
// Create a new instance of the HappyMeal class.
var menu_for_children = new HappyMeal(["candy", "drink", "toy"], 1);
// This time the log message will begin with the special introduction.
menu_for_children.list();
//Generics
// The <T> after the function name symbolizes that it's a generic function.
// When we call the function, every instance of T will be replaced with the actual provided type.
// Receives one argument of type T,
// Returns an array of type T.
function genericFunc(argument) {
    var arrayOfT = []; // Create empty array of type T.
    arrayOfT.push(argument); // Push, now arrayOfT = [argument].
    return arrayOfT;
}
var arrayFromString = genericFunc("beep");
console.log(arrayFromString[0]); // "beep"
console.log(typeof arrayFromString[0]); // String
var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]); // 42
console.log(typeof arrayFromNumber[0]); // number
//Modules
var sayHi = require("./exporter");
sayHi();
//# sourceMappingURL=Ex2.js.map