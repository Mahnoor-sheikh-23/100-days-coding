// Question 116: Create a switch case that matches several cases to the same
//  code block, representing seasons.
function monthes(monthName:number):void{
    switch(monthName){
    case 12:
    case 1 :
    case 2 :
    console.log("winter");
    break
    case 3:
    case 4:
    case 5:
    console.log("spring");
    break
    case 6:
    case 7:
    case 8:
    console.log("summer");
    break
    case 9:
    case 10:
    case 11:
    console.log("autumn");
    break
    default:
    console.log("invalid month");
    break
    }
}
monthes(12)