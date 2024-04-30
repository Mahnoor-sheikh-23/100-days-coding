"use strict";
// 🚀 Day 17 Challenge: Start Coding! 🚀
// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing
//  multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
function hobbies(...hoby) {
    hoby.forEach(hobby => console.log(`i enjoy ${hobby}`));
}
hobbies("sleeping", "walking", "driving", "gardening");
