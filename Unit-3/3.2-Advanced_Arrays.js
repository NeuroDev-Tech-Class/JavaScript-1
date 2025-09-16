// Advanced Arrays

// Map
// This function returns a new array where every element of the first array
// has had a provided function called on them

// We use => function notation for this where the item before the => indicates the
// input to the function and everything after => is the function

const array = [1, 4, 9, 16];

// Pass a function to map
const mapped = array.map((x) => x * 2);

console.log(mapped);
// Expected output: Array [2, 8, 18, 32]


// Reduce
// This function is used to take an array and reduce it down to one value
// This is done by starting with the first value and passing it through a function,
// Then repeating that for every array item
// This function also requires an initial value (usually 0 or "")

const arr = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;

const sumWithInitial = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);
// Expected output: 10


// Array mapping (similar to Python list comprehensions):
// Creating a new array of squares:

let squares = Array.from({ length: 10 }, (_, x) => x ** 2);
console.log(squares);  // Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

// Creating a new array of even numbers:
let evens = Array.from({ length: 10 }, (_, x) => x).filter(x => x % 2 === 0);
console.log(evens);  // Output: [0, 2, 4, 6, 8]

// More complex example: all pairs (x,y) where x != y
let combinations = [];
for (let x of [1, 2, 3]) {
    for (let y of [3, 1, 4]) {
        if (x !== y) {
            combinations.push([x, y]);
        }
    }
}
console.log(combinations);  
// Output: [[1,3],[1,4],[2,3],[2,1],[2,4],[3,1],[3,4]]