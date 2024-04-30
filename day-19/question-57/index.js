"use strict";
// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
let grades = [88, 98, 76, 54, 69, 99];
let total = grades.reduce((grade, value) => grade + value);
let len = grades.length;
let average = total / len;
console.log(average);
