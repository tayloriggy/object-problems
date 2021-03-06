/*
Create an object with three items in it, then write a JavaScript function that accepts an object and 
tells you the length (tells you how many items are in it) of the object.

Steps:
1. Create an object.
2. Create three keys within the object.
3. Write a function and pass in an object.
4. Use a method to return the number of keys within the object.
5. Return the length of the object.


*/

const seasons = {
    summer: "hot",
    fall: "perfect",
    winter: "cold"
};

function getLength (obj) {
    return Object.keys(obj).length;
}

getLength(seasons);