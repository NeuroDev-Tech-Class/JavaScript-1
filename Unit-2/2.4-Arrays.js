// Arrays

// Arrays are a type of data structure in JavaScript used to store a collection of items.
// They are ordered, mutable (able to be changed), and allow for duplicate elements.

 
// Creating an array:
let fruits = ['apple', 'banana', 'cherry'];

// Accessing items in an array:
console.log(fruits[0]);  // Output: 'apple'. Remember indexing starts at 0
console.log(fruits[1]);  // Output: 'banana'
console.log(fruits[fruits.length - 1]); // Output: 'cherry' (last item)

// Reassigning an item in an array:
fruits[1] = 'orange';
console.log(fruits);  // Output: ['apple', 'orange', 'cherry']

 
// Looping through an array:

// Using a for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using for...of (cleaner)
for (let fruit of fruits) {
    console.log(fruit);
}

 
// Checking if an item exists in an array:
if (fruits.includes('apple')) {
    console.log('Yes, apple is in the fruits array.');
}

 
// Adding an item to the end of an array:
fruits.push('banana');
console.log(fruits);  // Output: ['apple', 'orange', 'cherry', 'banana']

// Removing the last item:
fruits.pop();
console.log(fruits);  // Output: ['apple', 'orange', 'cherry']

// Adding to the beginning:
fruits.unshift('kiwi');
console.log(fruits);  // Output: ['kiwi', 'apple', 'orange', 'cherry']

// Removing from the beginning:
fruits.shift();
console.log(fruits);  // Output: ['apple', 'orange', 'cherry']

// Removing a specific item (first occurrence):
let index = fruits.indexOf('cherry');
if (index !== -1) {
    fruits.splice(index, 1);
}
console.log(fruits);  // Output: ['apple', 'orange']

 
// Sorting an array:
fruits.sort();
console.log(fruits);  // Output: ['apple', 'orange']

// Reversing an array:
fruits.reverse();
console.log(fruits);  // Output: ['orange', 'apple']

 
// Slicing (does NOT change the original array):
let numbers = [0, 1, 2, 3, 4, 5];
let slice1 = numbers.slice(2, 4); // gets [2, 3]
console.log(slice1);

let slice2 = numbers.slice(0, 3); // gets [0, 1, 2]
console.log(slice2);

let slice3 = numbers.slice(3); // gets [3, 4, 5]
console.log(slice3);