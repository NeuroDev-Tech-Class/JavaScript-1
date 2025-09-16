const prompt = require("prompt-sync")();

function list(library) {
  if (library.length == 0) {
    console.log("You have no books in your library...");
  } else {
    for (let x of library) {
      console.log(`- ${x}`);
    }
  }
}

function add(library) {
  let book = prompt("Enter the title of the book you want to add: ");

  if (book.length > 0) {
    if (library.indexOf(book) == -1) {
      library.push(book);
    }
    else {
      console.log("You already have the book...")
    }
  } else {
    console.log("You didn't enter anything...");
  }
}

function remove(library) {
  let book = prompt("What book would you like to remove? ");

  if (book == "all") {
      return [];
    }

  if (library.indexOf(book) != -1) {
        tempArr = [];
    for (let x of library) {
      if (x != book) {
        tempArr.push(x);
      }
    }
    return tempArr;
  } else {
    console.log("That book isn't in your library...");
  }
}

function pick(library) {
  if (library.length > 0) {
    let randBook = library[Math.floor(Math.random() * library.length)];
    console.log(`You should definitely read: ${randBook}`);
  } else {
    console.log("You haven't added any books yet...")
  }
}

function main() {
  console.log("It's readin' time!");
  let quit = true;
  let numWrong = 0;

  let library = [];

  while (quit) {
    console.log("\nAvailable Commands: list, add, remove, pick, quit")
    let res = prompt("What would you like to do? ")

    if (res == "list") {
      list(library);
    } else if (res == "add") {
      add(library);
    } else if (res == "remove") {
      library = remove(library);
    } else if (res == "pick") {
      pick(library)
    } else if (res == "quit") {
      console.log("\nGood Bye!\n")
      quit = false;
      
    } else {
      if (numWrong > 0) {
        console.log("I repeat, that is not an option!!!!")
      } else{
        console.log("That's not an option!")
        numWrong++;
      }
    }
  }
}

main();