// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a
//  special type alias, including properties unique to each shape.
type shape ={
    kind : "circle" | "rectangle"
    radius? : number
    width? : number
    height? : number
}
let circle : shape = {
    kind : "circle",
    radius : 8
}
let rectangle: shape={
    kind : "rectangle",
    radius : 6,
    width : 15
}
console.log(rectangle);
console.log(circle);
