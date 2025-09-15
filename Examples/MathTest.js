const prompt = require("prompt-sync")();
const { performance } = require("perf_hooks");


function GiveRandomNumber(max, min, even = false) {
  if (even) {
    let tryEven = Math.ceil(Math.random() * (max - min + 1)) + min;
    return (tryEven % 2 == 0) ? tryEven : GiveRandomNumber(max, min, true);
  }else {
    return Math.ceil(Math.random() * (max - min + 1)) + min;
  }
}

function formatTime(ms) {
  let totalSeconds = ms / 1000;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds % 60);
  let hundredths = Math.floor((totalSeconds % 1) * 100);

  // pad with leading zeros
  return `${minutes}:${seconds.toString().padStart(2, "0")}.${hundredths
    .toString()
    .padStart(2, "0")}`;
}

// ax +- b = z
function AlgebraProblems(diff, allAnswers) {
  // Loop for 10 questions
  for (i = 0; i < 10; i++) {
    let max = 20, min = 2;

    if (diff == "h") {
      let plusOrMinus = Math.round(Math.random());

      // Subtraction problems
      if (plusOrMinus == 1) {
        let a = GiveRandomNumber(max, min), b = GiveRandomNumber(9, min), c= GiveRandomNumber(30, 15);
        let ans = prompt(`Solve and round to nearest whole number: ${a}x - ${c} = ${b}x?`);

        // Check answer
        if (Math.round(c / (a - b)) == ans) {
          allAnswers["correct"] += 1;
          console.log("Correct!\n");
        } else {
          allAnswers["incorrect"] += 1
          console.log("Incorrect...\n");
        }

      // Addition Problems
      } else {
        let a = GiveRandomNumber(9, min), b = GiveRandomNumber(max, 9), c= GiveRandomNumber(30, 15);
        let ans = prompt(`Solve and round to nearest whole number: ${a}x + ${c} = ${b}x?`);

        // Check answer
        if (Math.round(c / (b - a)) == ans) {
          allAnswers["correct"] += 1;
          console.log("Correct!\n");
        } else {
          allAnswers["incorrect"] += 1
          console.log("Incorrect...\n");
        }
      }

    } else {
      let plusOrMinus = Math.round(Math.random());

      // Subtraction problems
      if (plusOrMinus == 1) {
        let a = GiveRandomNumber(9, min), b = GiveRandomNumber(max, min), c= GiveRandomNumber(max, min);
        let ans = prompt(`Solve and round to nearest whole number: ${a}x - ${c} = ${b}?`);

        // Check answer
        if (Math.round((b + c) / a) == ans) {
          allAnswers["correct"] += 1;
          console.log("Correct!\n");
        } else {
          allAnswers["incorrect"] += 1
          console.log("Incorrect...\n");
        }

      // Addition Problems
      } else {
        let a = GiveRandomNumber(9, min), b = GiveRandomNumber(30, 15), c= GiveRandomNumber(9, min);
        let ans = prompt(`Solve and round to nearest whole number: ${a}x + ${c} = ${b}?`);

        // Check answer
        if (Math.round((b - c) / a) == ans) {
          allAnswers["correct"] += 1;
          console.log("Correct!\n");
        } else {
          allAnswers["incorrect"] += 1
          console.log("Incorrect...\n");
        }
      }
    }
  }
}

// Rectangle area, perimeter
// Triangle Area, hypotenuse
function GeometryProblems(diff, allAnswers) {
  // Loop for 10 questions
  for (i = 0; i < 10; i++) {
    let max = 20, min = 2;

    if (diff == "h") {
      let rectOrTri = Math.floor(Math.random() * 3);

      // Rectangle Area
      if (rectOrTri == 0) {
        let a = GiveRandomNumber(max, min), b = GiveRandomNumber(max, min);
        let ans = prompt(`What is the area of a rectangle with height ${a} and width ${b}?`);

        // Check answer
        if (a * b == ans) {
          allAnswers["correct"] += 1;
          console.log("Correct!\n");
        } else {
          allAnswers["incorrect"] += 1
          console.log("Incorrect...\n");
        }

      // Triangle Area
      } else if (rectOrTri == 1) {
        let a = GiveRandomNumber(max, min, true), b = GiveRandomNumber(max, min);
        let ans = prompt(`What is the area of a triangle with base ${a} and height ${b}?`);

        // Check answer
        if ((1 / 2) * a * b == ans) {
          allAnswers["correct"] += 1;
          console.log("Correct!\n");
        } else {
          allAnswers["incorrect"] += 1
          console.log("Incorrect...\n");
        }

      // Triangle Hypotenuse
      } else {
        let a = GiveRandomNumber(9, 2), b = GiveRandomNumber(9, 2);
        let ans = prompt(`What is the rounded length of the hypotenuse for a triangle with side lengths ${a} and ${b}?`);

        // Check answer
        if (Math.round(Math.sqrt(a**2 + b**2)) == ans) {
          allAnswers["correct"] += 1;
          console.log("Correct!\n");
        } else {
          allAnswers["incorrect"] += 1
          console.log("Incorrect...\n");
        }
      }
    } else {
      let rectOrTri = Math.round(Math.random());
      if (rectOrTri == 1) {
        let a = GiveRandomNumber(max, min), b = GiveRandomNumber(max, min);
        let ans = prompt(`What is the perimeter of a rectangle with height ${a} and width ${b}?`);

        // Check answer
        if ((2 *a) + (2 * b) == ans) {
          allAnswers["correct"] += 1;
          console.log("Correct!\n");
        } else {
          allAnswers["incorrect"] += 1
          console.log("Incorrect...\n");
        }

      } else {
        let a = GiveRandomNumber(max, min);
        let ans = prompt(`What is the perimeter of a triangle with side length ${a}?`);

        // Check answer
        if ((3 *a) == ans) {
          allAnswers["correct"] += 1;
          console.log("Correct!\n");
        } else {
          allAnswers["incorrect"] += 1
          console.log("Incorrect...\n");
        }
      }
      
    }
  }
}

// a +- b
// a */ b
function ArithmaticProblems(diff, allAnswers) {
  // Loop for 10 questions
  for (i = 0; i < 10; i++){
    let max = 99, min = 2;
    if (diff == "h") {
      let multOrDivis = Math.round(Math.random());

      if (multOrDivis == 1) {
        // Multiplication
        let a = GiveRandomNumber(max, min), b = Math.ceil(GiveRandomNumber(max, min) / 10);
        let ans = prompt(`What is ${a} x ${b}?`);

        // Check answer
        if (a * b == ans) {
          allAnswers["correct"] += 1;
          console.log("Correct!\n");
        } else {
          allAnswers["incorrect"] += 1
          console.log("Incorrect...\n");
        }
      } else {
        // Division
        let a = GiveRandomNumber(max, min), b = Math.ceil(GiveRandomNumber(max, min) / 10);
        let ans = prompt(`What is ${a} / ${b}? rounded to nearest whole number?`);

        // Check answer
        if (Math.round(a / b) == Math.round(ans)) {
          allAnswers["correct"] += 1;
          console.log("Correct!\n");
        } else {
          allAnswers["incorrect"] += 1
          console.log("Incorrect...\n");
        }
      }
    } else {
      let plusOrMinus = Math.round(Math.random());
      if (plusOrMinus == 1) {
        // Addition
        let a = GiveRandomNumber(max, min), b = GiveRandomNumber(max, min);
        let ans = prompt(`What is ${a} + ${b}?`);

        // Check answer
        if (a + b == ans) {
          allAnswers["correct"] += 1;
          console.log("Correct!\n");
        } else {
          allAnswers["incorrect"] += 1
          console.log("Incorrect...\n");
        }
      } else {
        // Subtraction
        let a = GiveRandomNumber(max, min), b = GiveRandomNumber(max, min);
        let ans = prompt(`What is ${a} - ${b}?`);

        // Check answer
        if (a - b == ans) {
          allAnswers["correct"] += 1;
          console.log("Correct!\n");
        } else {
          allAnswers["incorrect"] += 1
          console.log("Incorrect...\n");
        }
      }
    }
  }
}

function CallProblem(questionType) {
  // Restart if questionType not allowed
  if (!["a", "b", "c"].includes(questionType)) {
    console.log("\nThat's not allowed!! Try again");
    main();
    return;
  }

  // Create Answers Object
  const allAnswers = {correct: 0, incorrect: 0};

  // Choose difficulty
  let diff = prompt("What difficulty: Easy (e) or Hard (h)");
  if (diff != "e" && diff != "h") {
    console.log("I guess that means you want hard problems...");
    diff = "h";
  } 

  console.log(`\nHere are 10 ${(diff == "h") ? "hard": "easy"} problems:\n`);

  // Assign Questions
  if (questionType == "a") {
      ArithmaticProblems(diff, allAnswers);
    } else if (questionType == "b") {
      GeometryProblems(diff, allAnswers);
    } else if (questionType == "c") {
      AlgebraProblems(diff, allAnswers);
  }

  return allAnswers;
}

function PlayAgain() {
  let playAgain = prompt("Would you like to play again? (y/n)");

  if (playAgain == "y") {
    return true;
  } else if (playAgain == "n") {
    return false;
  } else {
    console.log("\nI guess that's a YES!!\n");
    return true;
  }
}

function main() {
  // Start gameplay loop
  let cont = true;
  while (cont) {
    console.log("\nLet's do some math!!\n");
    let questionType = prompt(`Would you like to practice Arithmatic (a), Geometry (b), or Algebra (c)?`)

    // Choose question type
      let startTime = performance.now();
    let answers = CallProblem(questionType);

      // Record Time and output results
    let elapsed = performance.now() - startTime;
    console.log(`\nYou got ${answers["correct"]} of ${answers["correct"] + answers["incorrect"]} in ${formatTime(elapsed)}\n`)
    
    // Check if they want to play another time
    cont = PlayAgain();
  }
}

main();
