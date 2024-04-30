// 🚀 Day 20 Challenge: Start Coding! 🚀

// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function averageScore(...score:number[]):number{
    let total = score.reduce((res,val)=>res + val)
    return total / score.length
}
let answer = averageScore(34,67,89,79)
console.log(answer);
