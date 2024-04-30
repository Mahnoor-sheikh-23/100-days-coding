// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns 
// both the quotient and the remainder.Use an object to return both values.

function divideFunc(divide1:number,divide2:number){
    return{
        quotient: divide1 / divide2,
        remainder : divide1 % divide2
    }
}
console.log(divideFunc(64,20))