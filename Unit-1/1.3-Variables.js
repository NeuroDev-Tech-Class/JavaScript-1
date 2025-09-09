/* A variable is a user-defined container of data. When you declare
a variable, you give it a name and assign a value to it.

Variables can be changed or manipulated throughout the program.
Variables can be of any data type.
To declare a variable, you assign a value to a name using the = symbol.
*/

const num = 3;
let str = "Hello";
/*
There are two ways to declare variables in JavaScript: 
const and let

const is used for variables that cannot be changed later on in the code

let is used for variables that you want to change later in the code

These variables are block-scoped, meaning they are only usable in the 
area of the code they were defined. 
*/

console.log(num);
// This will print 3 to the console

// You can also set varaibles equal to an expression
let num2 = 42 + 27;


/* You can perform several types of operations with numbers in JavaScript:
+ -      <--- Addition / Subtraction
* /      <--- Multiplication and Division
**       <--- Exponents
%        <--- Modulo Divison (Divides two number and returns the remainder)
*/

let addSub = num + num2 - 23;
let multDiv = num * num2 / 2;
let exp = num ** 3;
let mod = num2 % num1;

console.log (addSub);
console.log (multDiv);
console.log (exp);
console.log (mod);

/* Remember that operators are exectued in this order, not necessarily from left to right:
()
**
* /
+-
*/