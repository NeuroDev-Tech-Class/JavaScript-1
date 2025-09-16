// Classes
//
// Classes in JavaScript are templates for creating objects.
// They bundle together data (properties) and behavior (methods).
// Think of a class as a blueprint, and objects created from it as instances.


// Creating a simple class:
class Person {
    constructor(name, age) {
        this.name = name;   // property
        this.age = age;     // property
    }

    // method
    greet() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating instances (objects from the class):
let alice = new Person('Alice', 25);
let bob = new Person('Bob', 30);

alice.greet();  // Output: Hi, my name is Alice and I am 25 years old.
bob.greet();    // Output: Hi, my name is Bob and I am 30 years old.


// Adding a new method to a class:
class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log(`${this.name} says: Woof!`);
    }
}

let rex = new Dog('Rex');
rex.bark();  // Output: Rex says: Woof!


// Updating properties:
rex.name = 'Max';
rex.bark();  // Output: Max says: Woof!


// Using getters and setters:
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // getter
    get area() {
        return this.width * this.height;
    }

    // setter
    set changeWidth(newWidth) {
        this.width = newWidth;
    }
}

let rect = new Rectangle(4, 5);
console.log(rect.area);  // Output: 20
rect.changeWidth = 10;
console.log(rect.area);  // Output: 50


// Inheritance
// A class can extend another class to reuse and customize behavior.
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name);     // call the parent constructor
        this.color = color;
    }
    speak() {
        console.log(`${this.name} the ${this.color} cat meows!`);
    }
}

let kitty = new Cat('Whiskers', 'black');
kitty.speak();  // Output: Whiskers the black cat meows!


// Static methods
// Methods that belong to the class itself, not instances.
class MathHelper {
    static add(x, y) {
        return x + y;
    }
}

console.log(MathHelper.add(5, 10));  // Output: 15


// Summary:
// - Use `class` keyword to define a class
// - `constructor()` initializes object properties
// - Methods define object behavior
// - Use `new` to create an instance
// - `extends` creates a subclass (inheritance)
// - `get` and `set` for special property handling
// - `static` methods belong to the class, not instances
