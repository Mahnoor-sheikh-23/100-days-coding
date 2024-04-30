"use strict";
// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
const names = new Map();
names.set("1:", "mahnoor");
names.set("2:", "rimsha");
names.set("3:", "kulsoom");
names.forEach((para, id) => {
    console.log(para, id);
});
