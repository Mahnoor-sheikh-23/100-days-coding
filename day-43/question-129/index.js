"use strict";
// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
const traditionalFunct = {
    name: "daniyal",
    about: function () {
        console.log(this.name);
    },
    arrofunction: () => {
        console.log(this.name);
    },
};
traditionalFunct.about();
traditionalFunct.arrofunction();
