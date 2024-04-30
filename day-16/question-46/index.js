"use strict";
// day:16
// question no : 46 
// Question 46: Enhanced Laptop Object: Construct an object for a laptop
//  including properties make, model, year, and a method describe() that logs a sentence about the laptop.
Object.defineProperty(exports, "__esModule", { value: true });
let laptop = {
    make: "dell",
    model: "inspiron 13-7378",
    year: 2022,
    describe: function () {
        console.log(`The name of the laptop is ${this.make}.the model is ${this.model} and the year is ${this.year} `);
    }
};
laptop.describe();
