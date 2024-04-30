// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows
// , like coding languages, tools, and software frameworks
// . Find a way to get three specific skills from this list and show them.
let skills = {
    languages : ["C++" , "java" ,"typescript" ],
    tools : ["DataBase Knowledge","Testing Producers","Source Control"],
    frameWork : ["React","Angular","Vue"]
}
let {languages,tools,frameWork} = skills
console.log(`Language : ${languages[1]}
Tool : ${tools[1]}
Framework : ${frameWork[1]} `);


