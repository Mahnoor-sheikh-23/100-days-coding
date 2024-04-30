"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function currentDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(`today date is :\n`, currentDate());
