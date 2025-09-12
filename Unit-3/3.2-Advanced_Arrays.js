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
