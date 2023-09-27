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


/*
Exercise 4:
  - Access the string 'pizza' (based upon its known position) in the foods array and assign to a variable named favFood.
*/

// Complete Exercise 4 below...
let favFood = foods[1];
console.log('Exercise 4 Result:\n', favFood);


/*
Exercise 5:
  - Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'
*/

// Complete Exercise 5 below...
// this adds one string starting at index 2 without overwriting what's already there
foods.splice(2, 0, 'tofu');
console.log('Exercise 5 Result:\n', foods);


/*
Exercise 6:
  - Replace the string 'pizza' in the foods array with the strings 'sushi' & 'cupcake'.
*/

// Complete Exercise 6 below...
// this replaces the array for one element, starting at index 1, with two strings. now the array is longer.
foods.splice(1, 1, 'sushi', 'cupcake');
console.log('Exercise 6 Result:\n', foods);


/*
Exercise 7:
  - Use the slice method on the foods array to create a new array containing 'sushi' & 'cupcake'.
  - Assign the new array to a variable named yummy.
*/

// Complete Exercise 7 below...
// this stores a new array starting at index 1 of 'foods' up to but not including index 3...
const yummy = foods.slice(1, 3);
console.log('Exercise 7 Result:\n', yummy);


/*
Exercise 8:
  - Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
*/

// Complete Exercise 8 below...
let soyIdx = foods.indexOf('tofu');
console.log('Exercise 8 Result:\n', soyIdx);


/*
Exercise 9:
  - Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
    'taco -> sushi -> cupcake -> tofu -> cheeseburger'
*/

// Complete Exercise 9 below...
// this turns the array elements into a single string, separated by a custom separator instead of the default comma (', ')
const allFoods = foods.join(' -> ');
console.log('Exercise 9 Result:\n', allFoods);


/*
Exercise 10:
  - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
*/

// Complete Exercise 10 below...
let hasSoup = foods.includes('soup');
console.log('Exercise 10 Result:\n', hasSoup);


/*
Exercise 11:
  - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
  - Hint: Initialize the odds variable to an empty array before the iteration.
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// Complete Exercise 11 below...
const odds = [];
// forEach passes each array element into a function. here, that function adds the element to a new array but only if it's not evenly divisible by 2…aka odd.
nums.forEach(num => {
  if (num % 2) {
    odds.push(num);
  }
})
console.log('Exercise 11 Result:\n', odds);


/*
Exercise 12:
  - Use the forEach method to iterate through the same nums array and add the number to **one** of the following arrays: fizz, buzz or fizzbuzz - based upon the following:
  	- Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
  	- Add to the fizz array if the number is evenly divisible by 3.
  	- Add to the buzz array if the number is evenly divisible by 5.
*/

// Complete Exercise 12 below...
let fizz = [];
let buzz = [];
let fizzbuzz = [];
nums.forEach(num => {
  // only add if it's divisible by 3 and 5
  if (num % 3 === 0 && num % 5 === 0) {
    fizzbuzz.push(num);
  }
  // only add if it's divisible by 3
  else if (num % 3 === 0) {
    fizz.push(num);
  }
  // only add if it's divisible by 5
  else if (num % 5 === 0) {
    buzz.push(num);
  }
});
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);


/*
Exercise 13:
  - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
  - Assume you don't know how many nested arrays numArrays contains.
*/

const numArrays = [
	[100, 5, 23],        // 0
	[15, 21, 72, 9],     // 1
	[45, 66],            // 2
	[7, 81, 90]          // 3
];

// Complete Exercise 13 below...
// this creates a new array. it uses whatever is at the last index of 'numArrays' which is also an array. then those elements are spread into numlist.
const numList = [...numArrays[numArrays.length-1]];
console.log('Exercise 13 Result:\n', numList);


/*
Exercise 14:
  - Given the above numArrays array, access the number 66 and assign to a variable named num.
*/

// Complete Exercise 14 below...
// One way (hardcoding, assuming you already know where what you want is located)
// let num = numArrays[2][1];

// Another way (if you want to find the index and then refer to whatever that value is)
const idx = numArrays[2].indexOf(66);
const num = numArrays[2][idx];

console.log('Exercise 14 Result:\n', num);


/*
Exercise 15:
  - Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays and assign to a variable named total.
  - Hint: Be sure to declare and initialize the total variable before the iterations.
*/

// Complete Exercise 15 below...
// create a total with a starting value of 0 because you haven't counted anything yet
let total = 0;

// you need to pass in each array element… 
numArrays.forEach(array => {
  // but each element of numArrays is also an array, so you have to do it again…
  array.forEach(value => {
    // now you can access the individual values of each nested array, adding them one by one to your running total
    total += value;
  });
});

console.log('Exercise 15 Result:\n', total);