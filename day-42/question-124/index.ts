// 🚀 Day 42 Challenge: Start Coding! 🚀
// Question 124: Create a function inside an object that returns the object's own name property
//  using the this keyword

const object = {
    name : "Nasir",
    fname : "adnan",
    class : 4,
    age : 10,
    about : function(){
        return this.name
    }

    }
console.log(object.about())