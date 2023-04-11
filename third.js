const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Enter a month: `, (monthNum) => {
  let season;
  switch (monthNum) {
    case "1":
      season = "winter";
      break;
    case "2":
      season = "winter";
      break;
    case "3":
      season = "spring";
      break;
    case "4":
      season = "spring";
      break;
    case "5":
      season = "spring";
      break;
    case "6":
      season = "summer";
      break;
    case "7":
      season = "summer";
      break;
    case "8":
      season = "summer";
      break;
    case "9":
      season = "fall";
      break;
    case "10":
      season = "fall";
      break;
    case "11":
      season = "fall";
      break;
    case "12":
      season = "winter";
      break;
    default:
      console.log("Wrong number");
  }
  console.log(season);
  readline.close();
});

//---------------------------------BU DA BAŞQA BİR OPTION

// switch (monthNum) {
//   case 12:
//   case 1:
//   case 2:
//     season = "winter";
//     break;
//   case 3:
//   case 4:
//   case 5:
//     season = "spring";
//     break;
//   case 6:
//   case 7:
//   case 8:
//     season = "summer";
//     break;
//   case 9:
//   case 10:
//   case 11:
//     season = "fall";
//     break;
// }
// console.log(season);
