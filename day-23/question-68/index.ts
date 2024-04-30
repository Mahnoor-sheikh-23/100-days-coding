// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns
//  their product. Round the result to two decimal places.
function checckingDecimal(deci1:number,deci2:number){
    return Math.round((deci1*deci2)*100)/100
}
console.log(checckingDecimal(0.1,0.3));
