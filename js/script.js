/* let AvailableGuess = 3; guessrange = [1,100] 
abs(a-b) >10 => too low or too high
*/
let min = 1;
let max = 100;

function GuessNumber(guess, NumOfGuess) {
  StartGame();
  InputArray = getInput() 
  guess = parseInt(InputArray[0]);
  NumOfGuess = parseInt(InputArray[1]); 
  if (NumOfGuess === 0) {
    return resetGame();
  } 
  //  const generatedRandomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  const generatedRandomNumber = 10;
  list = [{
    Visib: "visible",
    idx: "toolow"
  }, {
    Visib: "visible",
    idx: "toohigh"
  }, {
    Visib: "visible",
    idx: "trollface"
  }, {
    Visib: "visible",
    idx: "bingo"
  }, {
    Visib: "visible",
    idx: "letsgo"
  }]
  //    var arr = Array(2).fill({Visib: }, {idx})
  let n = 0;
  while (n < NumOfGuess) {
    if (guess > generatedRandomNumber - 10) {
      let remain = Num -1
      return console.log([remain, list[0], list[3]]);
    } if (guess >= generatedRandomNumber + 10) {
      let remain = NumOfGuess -1
      return console.log([remain, list[1], list[3]]);
    } else if (diff(guess - generatedRandomNumber) === 0) {
      resetGame();
      return console.log([0, list[2], list[3]]);
    }
  }
}

/* GuessNumber(10, 10) // Test GuessNumber function */


function diff(guess, expected) {
  return Math.abs(guess - expected);
}

function getInput() {
  const guess = document.getElementById("guess").value;
  const NumOfGuess = document.getElementById("AvailableGuess").value;
  return [guess, NumOfGuess];
}

function ExecutionGuessNumber() {
  const guess = document.getElementById("guess").value;
  const NumOfGuess = document.getElementById("AvailableGuess").value;
  console.log(guess, NumOfGuess);
  const Result = GuessNumber(guess, NumOfGuess);
  console.log(Result);
  document.getElementById(Result[2].idx).style.visibility = Result[1].Visib;
  document.getElementById(Result[2].idx).style.visibility = Result[1].Visib;
  document.getElementById(Result[2].idx).style.visibility = Result[1].Visib;
  document.getElementById(Result[2].idx).style.visibility = Result[1].Visib;
  document.getElementById(Result[2].idx).style.visibility = Result[1].Visib;
  document.getElementById(Result[2].idx).value = Result[1].Visib;
  document.getElementById("RemainingGuess").value = Result[0];
}

function resetGame() {
  remain = document.getElementById("RemainingGuess").value;
  if (remain == 0) {
    document.getElementById("toolow").style.visibility = "hidden";
    document.getElementById("trollface").style.visibility = "hidden";
    document.getElementById("toohigh").style.visibility = "hidden";
    document.getElementById("bingoMessage").style.visibility = "hidden";
    document.getElementById("guess").innerText = '';
    document.getElementById("AvailableGuess").innerText = '';
  } 
  StartGame();
}

function StartGame() {
  document.getElementById("letsgo").style.visibility = "visible";
}


