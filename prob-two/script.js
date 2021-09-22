/*
Create an array of people objects with first name, last name, and age, then write a JavaScript program to display the 
first and last names of all the people.
Your function should take in an object and return the values above.

Steps:
1. Create an array of multiple people objects.
2. Within each object, create keys such as first name, last name, and age.
3. Define the values to each key within each person object.
4. Use a method to display the first and last names of all people.
5. Create a function that takes in an object as its sole parameter.
6. Return the values of first and last names.

*/

let people = [
    {
        firstName: 'John',
        lastName: 'Wayne',
        age: 45
    },

    {
        firstName: 'William',
        lastName: 'Bonney',
        age: 19
    },

    {
        firstName: 'Wyatt',
        lastName: 'Earp',
        age: 40
    }
]

function fullNames (obj) {
    for (let i = 0; i < obj.length; i++) {
        console.log(obj[i].firstName + " " + obj[i].lastName);
    }
}

fullNames(people);
