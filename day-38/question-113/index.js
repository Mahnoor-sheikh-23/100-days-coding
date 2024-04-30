"use strict";
//  Question 113: Write a function that checks if a
//  Map contains a key for "Canada" and logs the capital if it exists.
const countries = new Map();
countries.set("paris", "france");
countries.set("japan", "Tokyo");
countries.set("india", "delhi");
countries.set("Pakistan", "islamabd");
console.log(countries);
function logCapitalOfCanada(countries) {
    if (countries.has("Canada")) {
        console.log(`The capital of Canada is ${countries.get("Canada")}`);
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
logCapitalOfCanada(countries);
