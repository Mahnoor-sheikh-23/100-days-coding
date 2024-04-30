"use strict";
function divideFunc(divide1, divide2) {
    return {
        quotient: divide1 / divide2,
        remainder: divide1 % divide2
    };
}
console.log(divideFunc(64, 20));
