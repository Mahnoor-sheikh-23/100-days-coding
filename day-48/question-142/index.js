"use strict";
// 🚀 Day 48 Challenge: Start Coding! 🚀
// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("hello world");
    }, 2000);
});
promise.then((message) => {
    console.log(message);
});
