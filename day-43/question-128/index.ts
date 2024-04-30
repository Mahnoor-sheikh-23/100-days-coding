// Question 128: Create an arrow function that takes multiple
//  parameters and returns the product of all parameters.

const multiplePara = (...num1 : number[])=>{
    return num1.reduce((total,grade)=> total * grade)

}
console.log(` The product of all number is : ${multiplePara(3,6,2,8,4)}`);
