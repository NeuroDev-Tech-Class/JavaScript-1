// Objects
//
// Objects in JavaScript are collections of key–value pairs.
// They let you store and organize data with meaningful labels (keys).
// Keys are also called *properties*, and the values can be any data type
// (numbers, strings, arrays, functions, even other objects!).


// Creating an object:
let person = {
    name: 'Alice',
    age: 25,
    isStudent: true
};

// Accessing properties:
console.log(person.name);      // Output: 'Alice'
console.log(person['age']);    // Output: 25

// Adding a new property:
person.city = 'New York';
console.log(person);  
// Output: { name: 'Alice', age: 25, isStudent: true, city: 'New York' }

// Updating a property:
person.age = 26;
console.log(person.age);  // Output: 26

// Deleting a property:
delete person.isStudent;
console.log(person);  
// Output: { name: 'Alice', age: 26, city: 'New York' }


// Looping through an object:
// for...in goes through each key
for (let key in person) {
    console.log(key, person[key]);
}
// Output:
// name Alice
// age 26
// city New York


// Checking if a property exists:
if ('name' in person) {
    console.log('Yes, name exists in person.');
}


// Nested objects:
let student = {
    name: 'Bob',
    grades: {
        math: 90,
        science: 85
    }
};
console.log(student.grades.math);  // Output: 90


// Objects can also hold functions (called methods):
let dog = {
    name: 'Rex',
    bark: function() {
        console.log('Woof!');
    }
};

dog.bark();  // Output: 'Woof!'


// Useful built-in methods for objects:

// Get all keys:
console.log(Object.keys(person));  
// Output: ['name', 'age', 'city']

// Get all values:
console.log(Object.values(person));  
// Output: ['Alice', 26, 'New York']

// Get key–value pairs as arrays:
console.log(Object.entries(person));  
// Output: [['name', 'Alice'], ['age', 26], ['city', 'New York']]
