// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both 
// let and const. Show how variables declared inside the block are not accessible outside of it.
// 

{
    let person = "human"
    const num = "this is a const"
    console.log(person);//that is totallly fine
    console.log(num);//that is also fine
    
    
}
try{
    // console.log(person);
    
}catch(error){
    console.log("person is not accessible outside the block");
    
}
try{
    // console.log(num);
    
}catch(error){
    console.log("num is not accessible outside the block");
    
}


