/*
Create a sample object, then write a JavaScript function that deletes the property of an object passed to it.
Your JavaScript function should take in two parameters, the object and the key/property you want to delete.

Steps:
1. Create an object.
2. Write a function that deletes the property that is passed to that object.
3. Pass in two parameters to the function, the object and the key/property I want to delete.
4. 

*/

let dinosaur = {
    species: "Triceratops",
    type: "herbivore",
    quirk: "three horns"
};

function removeProperty (dinosaur, quirk) {
    delete dinosaur.quirk;
}

return removeProperty(dinosaur, quirk);