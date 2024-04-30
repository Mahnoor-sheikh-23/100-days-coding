// Question 135: Explain how you can format a JSON string with proper indentation for readability.

const personal = {
    name:"mahnoor",
    fname : "adnan",
    age : 12
}
const info = JSON.stringify(personal,null,4)
console.log(info);
