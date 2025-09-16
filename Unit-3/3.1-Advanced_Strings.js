// Advanced Strings

// In this lessons I'll show you several more advanced techniques for manipulating strings


// Includes
// The includes() method of String values performs a case-sensitive 
// search to determine whether a given string may be found within this string, 
// returning true or false as appropriate.

const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`,
);
// Expected output: "The word "fox" is in the sentence"


// String()
// This forces any variable into a string

let num = 23498;
let str = String(num);
console.log(str);
// Expected output: "23498"


// Number()
// This is similar to String(), but can turn a variable into a number
// If the variable cannot be forced into a number, it will return undefined

str = "23478";
num = Number(str);
console.log(num);
// Expected ouput: 23478


// Starts With - Ends With
// The startsWith() method of String values determines whether this 
// string begins with the characters of a specified string, returning 
// true or false as appropriate. 
// The same works for endsWith()

const str2 = "Saturday night plans";

console.log(str2.startsWith("Sat"));
// Expected output: true


// at
// This returns the character in the string at the designated position (index starts at 0)
// Use an integer. The integer can also be negative, which would start at the end and move backwards

const sentence2 = "The quick brown fox jumps over the lazy dog.";
console.log(sentence2.at(5));
// Expected output: "u"


// Replace - ReplaceAll
// This function replaces a certain section of a string with another string.
// Replace does the first instance, while replaceAll does every instance

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", "my"));
// Expected output: "I think my dog is cuter than your dog!"

console.log(paragraph.replaceAll("i", "AI"));
// Expected output: "I thAInk Ruth's dog AIs cuter than your dog!"


// Split
// The split() method of String values takes a pattern and divides this 
// string into an ordered list of substrings by searching for the pattern, 
// puts these substrings into an array, and returns the array.

const str3 = "The quick brown fox jumps over the lazy dog.";

const words = str3.split(" ");
console.log(words[3]);
// Expected output: "fox"

const chars = str3.split("");
console.log(chars[8]);
// Expected output: "k"

const strCopy = str3.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]