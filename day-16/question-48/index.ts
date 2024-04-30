// question : 48
// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to 
// combine these arrays into a single array sorted in ascending order, then log the result

let price : number[] = [1700,9000,1500,2000]
let price2 : number[] = [3000,4500,5000,6000]
let ar2 = [...price,...price2].sort();

console.log(ar2)



