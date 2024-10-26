// nested if else

let winningNumber = 19;
let userGuess = +prompt("guess the number");

if (userGuess === winningNumber) {
  console.log("your guess is right!!");
  console.log(typeof userGuess);
} else {
  if (userGuess < winningNumber) {
    console.log("too low");
  } else {
    console.log("too high");
  }
}
