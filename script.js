/*
Create a sample object, then write a JavaScript function that deletes the property of an object passed to it.
Your JavaScript function should take in two parameters, the object and the key/property you want to delete.

Steps:
1. Create an object with keys and corresponding values.
2. Write a function that deletes the key that is passed to that object.
3. Pass in two parameters to the function, the object and the key/property I want to delete.
4. Return the object to see the changes.

*/

let dinosaur = {
    species: "Triceratops",
    type: "herbivore",
    quirk: "three horns"
};

function removeProperty (obj, key) {
    delete obj[key];
    return obj;
}

removeProperty(dinosaur, "type");