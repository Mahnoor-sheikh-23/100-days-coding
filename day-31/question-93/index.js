"use strict";
function fruites(fruit) {
    let index = fruit.indexOf("banana");
    if (index !== -1)
        fruit[index] = "mango";
    return index;
}
let myFvrtFR = ["guava", "cherry", "strawberry", "dragon"];
console.log(fruites(myFvrtFR));
