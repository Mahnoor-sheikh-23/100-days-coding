"use strict";
// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what 
// you need at that moment, like adjusting labels based on user choices.
function flexibleObject(value, key) {
    let dynamicKey = {};
    dynamicKey[value] = key;
    return dynamicKey;
}
let userPreference = flexibleObject("furniture", "bed");
console.log(userPreference);
