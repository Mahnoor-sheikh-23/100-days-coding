"use strict";
// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function isdivisiblyby(num) {
    return (num % 2 == 0 && num % 3 == 0);
}
console.log(isdivisiblyby(18));
