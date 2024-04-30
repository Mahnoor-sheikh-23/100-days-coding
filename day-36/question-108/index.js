"use strict";
// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
function checking(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
}
console.log(checking("moni", "MONI"));
console.log(checking("sheikh", "MONI"));
