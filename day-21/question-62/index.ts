// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking,
//  and then fill in this blueprint with an example student
interface information{
    name : string
    age : number
    course : string[]
}

let student : information = {
    name : "Mahnoor",
    age : 17,
    course : ["biology","physics"]
}
console.log(student);
