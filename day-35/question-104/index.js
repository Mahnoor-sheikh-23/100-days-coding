"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 104: Create a function that generates a random hexadecimal color code.
function hexadecimal() {
    const randomColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return randomColor;
}
console.log(hexadecimal());
