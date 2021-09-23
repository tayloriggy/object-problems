/*
Write a JavaScript function to sort the following array of objects by title value.

Hint: Read about the JavaScript sort method.

Example array: [ 

   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

   ];

   Steps:
   1. Create a function.
   2. Use the given array and use the sort method to arrange objects by title value.
   3. Return the object with titles sorted.

*/

const arrayOfBooks = [
    { 
        author: 'Bill Gates', 
        title: 'The Road Ahead', 
        libraryID: 1254
    },

    { 
        author: 'Steve Jobs', 
        title: 'Walter Isaacson', 
        libraryID: 4264
    },

    {   author: 'Suzanne Collins', 
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        libraryID: 3245
    }
];

function sortTitles (obj) {
    for (let i = 0; i < obj.length; i++){
      return obj[i].title.sort();
    }
    
}

sortTitles(arrayOfBooks);