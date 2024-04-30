// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

let mixArray = [1,"mahnnor",true,78,"kulsoom","rimsha"]
let stringarry = mixArray.filter(result=>
    typeof result === "string"
    
    
)
console.log(stringarry);

