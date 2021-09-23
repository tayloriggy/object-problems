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
   2. Compare two objects at a time to see which one needs to be sorted first. Use an if condition for this.
   3. If the first item is less than the second item, return -1, otherwise if it is greater return 1. Otherwise return 0.
   4. Use the sort method on the array and pass in the function.

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

function sortTitles (obj1, obj2) {
    if (obj1.title < obj2.title) {
      return -1;
    }
    else if (obj1.title > obj2.title) {
      return 1;
    }
    else {
      return 0;
    }
    
}

arrayOfBooks.sort(sortTitles);