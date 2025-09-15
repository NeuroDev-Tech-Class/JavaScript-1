// Exceptions

// Exceptions are errors that occur during the execution
// of a program. Instead of stopping the program entirely,
// we can "catch" these errors and handle them gracefully.

// In JavaScript, we use try, catch, finally, and throw.


// Basic try...catch
try {
    let result = 10 / 0;
    console.log(result);
    throw new Error("This is a custom error!");
} catch (error) {
    console.log("An error occurred: " + error.message);
}


// finally block (always runs, whether error or not)
try {
    console.log("Opening file...");
    throw new Error("File not found");
} catch (error) {
    console.log("Error: " + error.message);
} finally {
    console.log("Closing file... (always runs)");
}


// Throwing errors manually
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 2)); // 5
    console.log(divide(10, 0)); // throws error
} catch (error) {
    console.log("Caught: " + error.message);
}


// Nested try...catch
try {
    try {
        JSON.parse("{ bad json }");
    } catch (innerError) {
        console.log("Inner error: " + innerError.message);
        throw innerError; // rethrow
    }
} catch (outerError) {
    console.log("Outer error: " + outerError.message);
}
