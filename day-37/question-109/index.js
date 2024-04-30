"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 🚀 Day 37 Challenge: Start Coding! 🚀
// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
const currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning");
}
