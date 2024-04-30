function fruites(fruit:string[]){
    let index =  fruit.indexOf("banana")
    if(index !== -1)
        fruit[index] = "mango"
    return index
    
}
let myFvrtFR:string[] = ["guava","cherry","strawberry","dragon"]
console.log(fruites(myFvrtFR));


