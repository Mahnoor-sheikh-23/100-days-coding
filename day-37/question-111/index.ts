// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function personAge(input : number):string{
    if(input < 12){
        return "you are a child"
    }else if(input <= 19){
        return "you are teenager"
    }else{
        return "you are adult"
    }
}
console.log(personAge(57));
