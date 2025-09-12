// Functions

// A function is a reusable block of code that performs a task.
// It may take inputs (parameters) and may return a value.
// Functions make code easier to organize and reuse.


// Defining a function
function square(x) {
    console.log(x * x); // prints the square of x
}

square(3); // Prints 9


// Functions without return values
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Roo"); // Prints "Hello, Roo!"
// If a function has no 'return', it returns undefined.


// Functions with multiple parameters
function printNameAge(name, age) {
    console.log(`${name} is ${age} years old.`);
}

printNameAge("Alice", 30); // Prints "Alice is 30 years old."


// Default parameters
function repeat(word, times = 3) {
    console.log(word.repeat(times));
}

repeat("hello"); // Prints "hellohellohello"
repeat("bye", 2); // Prints "byebye"



// Returning values
function addNumbers(x, y) {
    let sum = x + y;
    return sum; // output the value
}

let result = addNumbers(5, 7);
console.log(result); // Prints 12



// Arbitrary number of arguments
// (rest parameters)
function multiply(...args) {
    let product = 1;
    for (let arg of args) {
        product *= arg;
    }
    return product;
}

console.log(multiply(2, 3, 4)); // Prints 24



// Functions as arguments
// (higher-order functions)
function doTwice(func, x) {
    return func(func(x));
}

function squareNumber(x) {
    return x * x;
}

console.log(doTwice(squareNumber, 2)); // Prints 16



// Nested functions
function outer() {
    console.log("Outer function");
    
    function inner() {
        console.log("Inner function");
    }

    inner();
}

outer();
// Prints "Outer function"
// Prints "Inner function"



// Function expressions
// A function can be stored in a variable.
const squareExpr = function(x) {
    return x * x;
};

console.log(squareExpr(4)); // 16



// Arrow functions
// A shorter syntax, often used for callbacks.
const squareArrow = (x) => x * x;

console.log(squareArrow(4)); // 16


/* SUMMARY
- JavaScript has multiple ways to write functions.
- Parameters can have defaults.
- Use '...args' for arbitrary arguments.
- Functions return 'undefined' unless you use 'return'.
- Functions can be nested, passed around, or returned. */
