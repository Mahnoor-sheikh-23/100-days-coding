//  Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

function gradingSys(user:number){
    if(user > 90 && user < 100){
        console.log("CONGRATULATION'S you got A+1 ");
    }else if(user > 80 && user < 89){
        console.log("CONGRATULATION'S you got A+ ");
    }else if(user > 75 && user < 79){
        console.log("NICE you got A  GRADE");
    }else if(user > 60 && user< 69){
        console.log("GOOD you got B GRADE");
    }else if(user > 50 && user < 59 ){
        console.log("you got C GRADE");
    }else if(user > 40 && user < 49){
        console.log("AWW you got D GRADE");
    }else{
        console.log("OO sorry you are FAIL!!!");
    }
}
gradingSys(99)