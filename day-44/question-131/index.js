// Question 131: Create two modules; one that exports a class, and another 
// that imports the class and creates an instance.
export class info {
    names;
    constructor(name) {
        this.names = name;
    }
    about() {
        console.log(`hello my name is ${this.names}`);
    }
}
