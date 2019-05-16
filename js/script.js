/* let AvailableGuess = 3; guessrange = [1,100] 
abs(a-b) >10 => too low or too high
*/
let min = 1;
let max = 100;

function GuessNumber(guess, NumOfGuess) {
  guessNow = parseInt(guess);
  NumOfGuessNow = parseInt(NumOfGuess);
  const generatedRandomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  //const generatedRandomNumber = 10;
  console.log(generatedRandomNumber);
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
  if (NumOfGuess === 0) {
    return resetGame();
  }
  if (guessNow > generatedRandomNumber - 10) {
    return [list[0], list[2], list[4]];
  }
  if (guessNow >= generatedRandomNumber + 10) {
    return [list[1], list[2], list[4]];
  } else if (diff(guessNow - generatedRandomNumber) === 0) {
    resetGame();
    return [list[3], list[4]];
  }
}

/* GuessNumber(10, 10) // Test GuessNumber function */

/* Event Listener*/


function incrementIndex() {
  let index = 0;
  index += 1;
  console.log(index);
}

function diff(guess, expected) {
  return Math.abs(guess - expected);
}
/*
function getInput() {
  const guess = document.getElementById("guess").value;
  const NumOfGuess = document.getElementById("AvailableGuess").value;
  console.log('guess and NumOfGuess', guess, NumOfGuess)
  return [guess, NumOfGuess];
}
*/

function EventHandler () {

}

function ExecutionGuessNumber(event) {
  event = document.getElementById("Guessbutton").addEventListener("click", incrementIndex);

  const NumOfGuessIn = document.getElementById("AvailableGuess").value;

  for (let i = 0; i < NumOfGuessIn; i++) {
    const guessIn = document.getElementById("guess").value;
    resetGame(NumOfGuessIn-index)
    document.getElementById("RemainingNum").textContent = NumOfGuessIn-index;
    console.log("guess and NumOfGuess", guessIn, NumOfGuessIn);
    let Result = GuessNumber(guessIn, NumOfGuessIn);
    console.log("Result", Result[0]);
  }
}


    document.getElementById(String(Result[2]).idx)).addEventListener("click", ExecutionGuessNumber).style.visibility = Result[1].Visib;
    document.getElementById(String(Result[2]).idx).addEventListener("click", ExecutionGuessNumber).style.visibility = Result[1].Visib;
    document.getElementById(String(Result[2]).idx).addEventListener("click", ExecutionGuessNumber).style.visibility = Result[1].Visib;
    document.getElementById(String(Result[2]).idx).addEventListener("click", ExecutionGuessNumber).style.visibility = Result[1].Visib;
    document.getElementById(String(Result[2]).idx).addEventListener("click", ExecutionGuessNumber).style.visibility = Result[1].Visib;
    document.getElementById(String(Result[2]).idx).addEventListener("click", ExecutionGuessNumber).value = Result[1].Visib;

//target.addEventListener(onclick, );


function StartGame() {
  document.getElementById("letsgo").style.visibility = "visible";
}

function resetGame(remain) {
  console.log('remain', typeof remain);
  if (remain == 0) {
    document.getElementById("toolow").style.visibility = "hidden";
    document.getElementById("trollface").style.visibility = "hidden";
    document.getElementById("toohigh").style.visibility = "hidden";
    document.getElementById("bingoMessage").style.visibility = "hidden";
    document.getElementById("letsgo").style.visibility = "hidden";
    document.getElementById("guess").innerText = '';
    document.getElementById("AvailableGuess").innerText = '';
  } else {
      StartGame();
  }
}

