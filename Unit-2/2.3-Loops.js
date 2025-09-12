// For Loops

/* For loops are the best way to iterate through an object or array,
or to do something a certain number of times. In Javascript, for loops work
exactly like C++ for loops.

You declare the loop, then in parantheses you declare the iterator variable 
(usually i), then declare when the loop will end with a less than statement,
then declare how the iterator variable will change each loop. These are separated
by semicolons. We use curly brackets for the contents of the loop.

Here is an example:
*/

let total = 0;

for (i = 0; i < 10; i++) {
    total += 1;     // Increment total for each time it loops
}

console.log(total);

/* In this loop, i starts at 0 and the loop continues until i is no longer less than 10.
The ++ is an operator that increases the value of a varaible by 1. So this loop will run
10 times. 

Here is an example where the loop will run an amount of time determined by a variable:
*/

total = 0;  // Reset total
const length = 20;

for (i = 0; i < length; i += 2) {   // Here I made it so i goes up by 2 every time
    total += 1;
}

/* This time, it will go until i is equal to, or greater than the value of length, 
which is 20. I also made i go up by 2 every time, so this loop will also iterate 10 times
(Most of the time you will use i++, but I wanted to show that you don't have to)
*/

// We will learn about arrays and objects later in this unit, but it will be helpful to 
// know how to iterate through them so I'll give examples below that you can come back to

// Array loop
let arr = [1, 2, 3, 4, 5];

for (let item of arr) { // We declare a variable "item" that takes the place of each item in the array in order
    console.log(item);
}

// Object loop
let person = {name: "Alice", age: 25, city: "Paris"};

for (let key in person) {   // In this case the loop grabs the keys of the object in order
    console.log("for...in:", key, "=", person[key]);
}


// While Loops

/* While loops are loops that will continue loop infinitely until a certain condition is met
These loops can be dangerous because if the condition is never met, the loop will never stop.

For a while loop, you declare a boolen statement (kind of like an if/else) and the loop
will go until that statement is no longer true
*/

let n = 10;

while (n > 0) {
    n -= 1;
}

// This loop will go 10 times before stopping
// You can also use a do..While loop which is a while loop that will run at least once

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 3);    // Since i is already less than 3, the loop will stop immediately


// Loop Control Statements

// JavaScripts control statements are the same as Python

// Break - causes a loop to stop completely and continues will the code after the loop

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // This loop with only print number 1-4 because the loop will stop at 5
    }
    console.log(i);
}

// Continue - Causes the loop to skip to the next iteration, ignoring the rest of the code in the loop

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;  // This outputs: 0, 1, 3, 4 (skips 2)
    } 
    console.log(i);
}