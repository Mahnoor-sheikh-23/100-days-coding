// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
function iterate(user:string){
    for(let i of user){
      
        if(i == "a" || i == "e" || i == "i" || i == "o" || i == "u"){
            console.log(`vowels found ${i} `);
            break
        }
        console.log(i);
        
       
        
        
    }
}
iterate("i am mahnoor adnana student of it ")