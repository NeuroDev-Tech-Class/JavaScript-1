function randomAsciiString() {
    let result = "";
    let l = Math.floor(Math.random() * 30 + 15)
    for (let i = 0; i < l; i++) {
        let code = Math.floor(Math.random() * (126 - 32 + 1)) + 32;
        result += String.fromCharCode(code);
    }
    return result;
}
let newString = randomAsciiString();

// Up above I create a string variable with a random length and characters
// Write two if/else trees. One to print if it's length is greater or less than 20
// and one to log if the string contains the letter "A" or not

