"use strict";
// Question 144: Explain the use of the Promise.all() method with an example.
const promise1 = Promise.resolve(5);
const promise2 = 49;
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 99, "food");
});
Promise.all([promise1, promise2, promise3]).then((value) => {
    console.log(value);
});
