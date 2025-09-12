// If Statements

/* In JavaScript, if statments are followed by a boolean statement enclosed 
by parantheses. Then we use curly brackets to enclosed what happens if the 
condition is met. We use else if to continue writing conditions, with a plain
else condition at the end. Here are some examples:
*/

let randNum = Math.random() * 20;

if (randNum > 10) {
    console.log("It's more than 10");
} else {
    console.log("It's less than 10");
}
// Math.random() is used to generate a random number between 0 and 1


// Here is an example with else if statements:

let randNum2 = Math.random() * 20 - 10;

if (randNum > 0) {
    console.log("The integer is positive");
} else if (randNum2 == 0){
    console.log("The integer is zero");
} else {
    console.log("The integer is negative");
}


// You can also write if statements without any else statements

if (randNum2 == 5) {
    randNum += 1;
}


// In some circumstances, if the output from the if/else statement is short,
// you can keep the output on the same line as the boolean statement:

if (randNum == 4) randNum -= 1;
else randNum = 4;


// If you want to learn an even more advanced method, you can use ternary statements
// These work the same as if/else statements, but can generally be kept to one line

(randNum2 ==4) ? randNum -= 1 : randNum = 4;

/* In this case, the boolean statement is made at the beginning
The question mark is used to indicate that you want something to happen based on the 
boolean statement.
Then you write what you want to happen if the boolean is true,
followed by a colon and then the outcome if the boolean is false.
You'll notice that this statement is more succinct than the previous example above
*/