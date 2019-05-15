/* let numberOfAvailableGuesses = 3; chose available guesses, guessrange = [1,100] 
abs(a-b) >10 => too low or too high
*/

let min = 1;
let max = 100;

let numberOfAvailableGuesses = document.getElementById("numberOfAvailableGuesses");

function diff(guess, expected) {
  return console.log(Math.abs(guess - expected));
}

function guessNumber() {
  if (numberOfAvailableGuesses === 0) {
    return;
  }
  //  const generatedRandomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  const generatedRandomNumber = 10;
  const guess = parseInt(document.getElementById("guess").value);
  console.log(typeof guess);
  if (guess > generatedRandomNumber - 10) {
    document.getElementById("toolow").style.visibility = "visible";
    document.getElementById("trollface").style.visibility = "visible";
    document.getElementById("toohigh").style.visibility = "hidden";
    document.getElementById("bingoMessage").style.visibility =
      "hidden";
  }
  if (guess >= generatedRandomNumber + 10) {
    document.getElementById("toohigh").style.visibility = "visible";
    document.getElementById("trollface").style.visibility = "visible";
    document.getElementById("toolow").style.visibility = "hidden";
    document.getElementById("bingoMessage").style.visibility = "hidden;

  }
  if (diff(guess - generatedRandomNumber) === 0) {
    document.getElementById("bingoMessage").style.visibility = "visible";
    document.getElementById("toohigh").style.visibility = "hidden";
    document.getElementById("trollface").style.visibility = "hidden";

  }
  document.getElementById("guess").value = "";
  const remainingGuesses = document.getElementById("numberOfRemainingGuesses")
    .innerHTML;
  document.getElementById("numberOfRemainingGuesses").innerHTML =
    parseInt(remainingGuesses) - 1;
  numberOfAvailableGuesses -= 1;
}

function resetGame() {
  numberOfAvailableGuesses = 10;
  document.getElementById("numberOfRemainingGuesses").innerHTML = 10;
}