"use strict";
// question no : 71
// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to
//  reassign a const-declared variable and catch the error.
// let can be updated and reassin
let names = "Huzaifa";
names = "Nasir";
console.log(names);
// but const can not be updated 
const age = 17;
try {
    age = 19;
}
catch (error) {
    console.log("Cannot assign to 'age' because it is a constant.");
    // this message is shown 
}
