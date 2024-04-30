"use strict";
// 🚀 Day 49 Challenge: Start Coding! 🚀
// Question 145: Create a function that accepts a callback and invokes it with some arguments.
function callFunc(callback, arg1, arg2) {
    callback(arg1, arg2);
}
const add = (a, b) => {
    console.log(a + b);
};
callFunc(add, 4, 5);
