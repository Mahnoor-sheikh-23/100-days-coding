"use strict";
// 🚀 Day 36 Challenge: Start Coding! 🚀
// Question 106: Determine if a given year is a leap year using comparison operators.
function isleapyear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isleapyear(2017));
console.log(isleapyear(2024));
