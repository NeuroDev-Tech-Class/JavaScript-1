// String Manipulation

// There are many ways to manipulate strings in helpful ways.


// Concatenation - chaining two strings together
// We define two string variables str1 and str2, and use the + operator to concatenate
// them together, along with a space in between. The resulting string is stored in a new
// variable str3, which is then printed to the console.
let str1 = "Hello";
let str2 = "world";
let str3 = str1 + " " + str2;
console.log(str3);


// Slicing - extracting a portion of a string
// We define a string variable str4 and use dot function .slice() to slice the string into
// substrings. We print out three different substrings of str4 using slicing.
// In JavaScript, indexing starts at 0, so the first character of a string is at index 0,
// the second character is at index 1, and so on. When using slicing, you specify the
// starting index and the ending index of the substring you want to extract.
// The starting index is inclusive, meaning the character at that index will be included
// in the resulting substring. The ending index is exclusive, meaning the character at
// that index will not be included in the resulting substring.
let str4 = "JavaScript is awesome";
console.log(str4.slice(0, 10));  // Prints "JavaScript" (characters 0-9)
console.log(str4.slice(11, 13));  // Prints "is" (characters 11-12)
console.log(str4.slice(14, 21));  // Prints "awesome" (characters 14-20)

// You can also use a single number in square brackets to get one character
console.log(str4[0]); // Prints "J"


// Formatting - insert values into a string
// There are several ways to format strings.
let myName = "Topher";
let age = 26;

// In Javascript we use string interpolation to insert variables into strings
// This is done with the ` symbol (most commonly found at the top left of the keyboard)
// with ${} being used to insert the variable as shown below
console.log(`My name is ${myName} and I'm ${age} years old.`);


// Additional tricks for formatting strings:

// The \n character represents a new line or line break in the output.
// This will print each word on a new line.
console.log("\nI \nlove \nJavaScript");

// Some helpful String methods
// .toUpperCase() - Converts a string into upper case.
myName = "roo";
myName = myName.toUpperCase();
console.log(myName);
// You can also use .toLowerCase() for the opposite.

// .trim() - Returns a string with the whitespace trimmed off.
let game = "Minecraft     ";
console.log(game + "is fun.");
game = game.trim();
console.log(game + "is fun.");

// .length() - Returns the number of characters in a string.
let sentence = "The quick brown fox jumps over the lazy dog.";
len = sentence.length();
console.log(len);