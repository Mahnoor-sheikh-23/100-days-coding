// Question 131: Create two modules; one that exports a class, and another 
// that imports the class and creates an instance.

export class info {
    names : string
    constructor(name:string){
        this.names = name
    }
    about(){
        console.log(`hello my name is ${this.names}`);
        
    }
}
