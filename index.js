const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Enter any number: `, (num) => {
  if (num == 0) {
    console.log("It is zero");
  } else if (num < 0) {
    console.log("Number is less than zero");
  } else if (num > 0) {
    console.log("Number is bigger than zero");
  } else console.log("This is not a number");
  readline.close();
});
