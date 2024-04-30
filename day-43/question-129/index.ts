// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

const traditionalFunct = {
    name : "daniyal",
    about : function(){
        console.log(this.name);
         
    },
    arrofunction : ()=>{
       console.log(this.name);// // 'this' is not bound to traditionalVsArrow object but 
    //    to the scope in which traditionalVsArrow was defined
    },
       
} 

traditionalFunct.about()
traditionalFunct.arrofunction()
// This code snippet illustrates the difference in how 'this' is determined in traditional functions versus arrow functions.



