const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Enter any number for factorialize: `, (num) => {
  if (num === 0 || num === 1) {
    console.log(1);
  }
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  console.log(num);
  readline.close();
});
