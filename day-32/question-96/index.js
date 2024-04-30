"use strict";
function reduceFunc(values) {
    return values.reduce((total, grade) => total + grade);
}
let numeric = [10, 45, 65, 98];
console.log(reduceFunc(numeric));
