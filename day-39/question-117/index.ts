// Question 117: Implement a switch statement that evaluates an
//  expression and uses the default case if none of the cases match.

function book(books:string){
    switch(books){
        case "typescript" :
         console.log("go to Ameen alam");
         break
        case "python":
         console.log("go to SIR Qasin");
         break
        case "javascript":
         console.log("go to zia khan");
         break
        default:
        console.log("give me return that book");
        break
    }

}
book("typescript")