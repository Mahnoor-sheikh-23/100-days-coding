"use strict";
// Question 149: Explain the concept of the event loop in JavaScript with an example.
console.log("starting from");
setTimeout(() => {
    console.log("this code will run after 0 sec");
}, 0);
console.log("its end");
// Although the timeout is 0, "Callback executed" is logged after "End" due to the event loop.
