"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function daysUntilYear() {
    const data = new Date;
    const newyear = new Date(data.getFullYear() + 1, 0, 1);
    const diff = newyear.getTime() - data.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntilYear());
