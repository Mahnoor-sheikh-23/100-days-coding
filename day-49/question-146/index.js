"use strict";
// Question 146: Show an example of a callback function used to filter an array of numbers.
const Numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = Numb.filter((val) => val < 5);
console.log(res);
