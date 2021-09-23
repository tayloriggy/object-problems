/*
Create an object, then write a JavaScript function that checks whether an object contains the specified key.

Steps:
1. Create an object.
2. Assign several keys to the object.
3. Write a function.
4. Use a method to check if specified key exists in object.
5. Return true if the object contains the specified key, otherwise return false.
6. Call the function.

*/

const wrestler = {
    name: "Rey Mysterio Jr.",
    style: "acrobat",
    signature: "hurricanrana"
};

function findKey (obj, key) {
    return key in obj;
}

findKey(wrestler, key);