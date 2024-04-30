// Question 125: Modify a method in an object to use the this 
// keyword to access another property in the same object.

const obj = {
   length:5,
   width:8,
   height:10,
   calculate:function(){
    return this.length * this.width
   }
}
console.log(obj.calculate());

