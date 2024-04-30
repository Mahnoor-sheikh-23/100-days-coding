"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let laptop = [{
        make: "dell",
        model: "inspiron 13-7378",
        year: 2022,
        describe: function () {
            console.log(`The name of the laptop is ${this.make}.the model is ${this.model} and the year is ${this.year} `);
        }
    }, {
        make: "hp",
        model: "Hp elitebook ",
        year: 2023,
        describe: function () {
            console.log(`The name of the laptop is ${this.make}.the model is ${this.model} and the year is ${this.year} `);
        }
    }, {
        make: "lenovo",
        model: "XPS 16",
        year: 2024,
        describe: function () {
            console.log(`The name of the laptop is ${this.make}.the model is ${this.model} and the year is ${this.year} `);
        }
    }];
let [laptop1, laptop2, laptop3] = laptop;
laptop1.describe();
laptop2.describe();
laptop3.describe();
