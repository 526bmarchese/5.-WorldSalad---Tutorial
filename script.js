//Get userName
let userName = prompt("What is your name?");
let userAge = prompt("How old are you?");
let userNoun = prompt("Enter a noun:");
let userVerb = prompt("Enter a verb:");
let userAdjective = prompt("Enter an adjective:");

//debug
console.log(userName);
console.log(userAge);
console.log(userNoun);
console.log(userVerb);
console.log(userAdjective);

//Creation of Story
let myStory = `Hello ${userName}! Welcome to the magical land of Codeville. At the age of ${userAge}, you are about to embark on an incredible adventure. 
In this land, there was a ${userAdjective} ${userNoun} who had a special talent: they could ${userVerb} like no one else! 
One day, the ${userNoun} decided to use their ${userVerb} skills to save the kingdom from a terrible fate. 
With courage and determination, the ${userAdjective} ${userNoun} became a hero, and their story was told for generations.`;

console.log(myStory);

document.getElementById("story").innerHTML = myStory;