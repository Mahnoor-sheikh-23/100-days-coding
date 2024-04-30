function objet(obj : object| any){
    for(let result in obj){
        console.log(`${result}:${obj[result]}`);
        
    }
}
objet({names:"mahnoor",age : 17})