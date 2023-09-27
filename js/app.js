console.log("My app.js is being run!");

/*
Exercise 1:
  - Define an empty array named foods
*/

// Exercise 1 has been completed for you...

const foods = [];
console.log('Exercise 1 Result:\n', foods);


/*
Exercise 2:
  - Add the strings 'pizza' & 'cheeseburger' to the foods array such that 'pizza' comes before 'cheeseburger'.
*/

// Complete Exercise 2 below...

foods.push('pizza');
foods.push('cheeseburger');
console.log('Exercise 2 Result:\n',  foods);

/*
Exercise 3:
  - Add the string 'taco' to the foods array so that 'taco' is the first food in the array.
*/

// Complete Exercise 3 below...

// Option 1: unshift()
// foods.unshift('taco');

// Option 2: splice() aka add at index 0 without overwriting anything
foods.splice(0, 0, 'taco');
console.log('Exercise 3 Result:\n', foods);