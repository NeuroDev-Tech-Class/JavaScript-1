// Comparison Operators

let x = 5;
let y = 10;

console.log(x == y)  // Equal to: Returns True if x is equal to y, otherwise False. Not to be confused with =.
console.log(x != y)  // Not equal to: Returns True if x is not equal to y, otherwise False.
console.log(x > y)  // Greater than: Returns True if x is greater than y, otherwise False.
console.log(x < y)  // Less than: Returns True if x is less than y, otherwise False.
console.log(x >= y)  // Greater than or equal to: Returns True if x is greater than or equal to y, otherwise False.
console.log(x <= y)  // Less than or equal to: Returns True if x is less than or equal to y, otherwise False.

// You can also use an extra = sign when performing comparison operations. This will
// also check if the variables on both sides are the same type, and will return false
// if they are not, while returning true if they both are the same type and the operation succeeds
x = 5;
y = 5.0;
console.log(x === y); // Returns false because x is an integer and y is a float

// When comparing strings, JavaScript compares the characters' ASCII values.
// Essentially this means alphabetical order, with earlier letters being "smaller".
console.log("X" > "Y")  // This will return False, because X is "lesser than" Y.
console.log("Apple" < "Zebra")  // This will return True, because Z is "greater than" A.


// Logic Operators
x = 5;
y = 10;
let z = 15;
// And operator: Returns True if both conditions are True.
console.log(x < y && y < z);  // Should return True
// Or operator: Returns True if at least one condition is True.
console.log(x > y || y < z);  // Should return True
// Not operator: Inverts the result of a condition.
console.log(!x > y);  // Should return True


// Assignment Operators
x = 5;  // Basic assignment operator. Be careful not to confuse with == which is completely different.
// There are also "incremental operators" which combine arithmetic with assignment.
x += 3;  // Add AND: Same as x = x + 3
x -= 2;  // Subtract AND: Same as x = x - 2
x *= 4;  // Multiply AND: Same as x = x * 4
x /= 2;  // Divide AND: Same as x = x / 2
x %= 3;  // Modulus AND: Same as x = x % 3
x **= 2; // Exponent AND: Same as x = x ** 2