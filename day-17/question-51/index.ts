// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area
//  of a rectangle and refactor it into an arrow function.
function area(width:number,height : number):number{
    return width * height;
}

let claculateArea = (width:number,height : number)=>{
    return width * height;
}

console.log(area(7,8));
console.log(claculateArea(4,8));

