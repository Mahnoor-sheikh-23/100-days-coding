"use strict";
// 🚀 Day 21 Challenge: Start Coding! 🚀
// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and
//  motorcycles using enums, and show one example.
var furniture;
(function (furniture) {
    furniture[furniture["bed"] = 0] = "bed";
    furniture[furniture["dressingTable"] = 1] = "dressingTable";
    furniture[furniture["cupbord"] = 2] = "cupbord";
})(furniture || (furniture = {}));
console.log(furniture.dressingTable);
