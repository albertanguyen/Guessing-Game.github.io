/* let AvailableGuess = 3; guessrange = [1,100] 
abs(a-b) >10 => too low or too high
*/
let min = 1;
let max = 100;

let guessHistory = [];
let triggerList = [];
  

function WriteGuessHistory(guess) {
  guessHistory.push(guess)
  let listOfUserGuess = '';
  guessHistory.map( (guess) => {
    listOfUserGuess
  })
}

function GuessNumber(guess, NumOfGuess) {
  guessNow = parseInt(guess);
  NumOfGuessNow = parseInt(NumOfGuess);
//  const generatedRandomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  const generatedRandomNumber = 10;
  console.log('generated number',generatedRandomNumber);
  
  let triggerList = [];
  
  //    var arr = Array(2).fill({Visib: }, {idx})
  if (NumOfGuess === 0) {
    return resetGame();
  }
  if outOfRange(x, 1, 100) {
    console.log("Your guess should be from 1 to 100. Let's try again!");
  }
  if (guessNow > generatedRandomNumber - 10) {
    //triggerList.push([list[0]) list[2], list[4]];
    triggerList
    
    console.log('trigger list', triggerList)
  }
  if (guessNow >= generatedRandomNumber + 10) {
    let triggerList = [list[1], list[2], list[4]];
    console.log('trigger list', triggerList)
  } else if (diff(guessNow - generatedRandomNumber) === 0) {
    resetGame();
    let [list[3], list[4]];
  }
}

/* GuessNumber(10, 10) // Test GuessNumber function */

/* Event Listener*/
/* output: not give out a number
function incrementIndex() {
  let index = 0;
  index += 1;
  console.log(index);
}
incrementIndex()

*/

function diff(guess, expected) {
  return Math.abs(guess - expected);
}

function outOfRange(x, min, max) {
  return x <= min | x >= max;
}
/*
function getInput() {
  const guess = document.getElementById("guess").value;
  const NumOfGuess = document.getElementById("AvailableGuess").value;
  console.log('guess and NumOfGuess', guess, NumOfGuess)
  return [guess, NumOfGuess];
}
*/

function getInput () {
  const NumOfGuessIn = parseInt(document.getElementById("AvailableGuess").value);
  let GuessNumIn = parseInt(document.getElementById("guess").value);
  return [GuessNumIn, NumOfGuessIn];
}

function ExecutionGuessNumber() {
  let data = getInput();
//  console.log(data[0], data[1]);
  let result = GuessNumber(getInput[0], getInput[1]);
  console.log(result);
}


/*
function ExecutionGuessNumber(event) {
  event = document.getElementById("Guessbutton").addEventListener("click", incrementIndex);
  const NumOfGuess = getInput[0];
  let GuessNum = getInput[1];
  console.log(GuessNum, NumOfGuessIn)
  for (let i = 0; i < NumOfGuessIn; i++) {
    const guessIn = document.getElementById0fc66f0("guess").value;
    resetGame(NumOfGuessIn-index)
    document.getElementById("RemainingNum").textContent = NumOfGuessIn-index;
    console.log("guess and NumOfGuess", guessIn, NumOfGuessIn);
    let Result = GuessNumber(guessIn, NumOfGuessIn);
    console.log("Result", Result[0]);
  }
}
1
    document.getElementById(String(Result[2]).idx)).a0fc66f0ddEventListener("click", ExecutionGuessNumber).style.visibility = Result[1].Visib;
    document.getElementById(String(Result[2]).idx).addEventListener("click", ExecutionGuessNumber).style.visibility = Result[1].Visib;
    document.getElementById(String(Result[2]).idx).addEventListener("click", ExecutionGuessNumber).style.visibility = Result[1].Visib;
    document.getElementById(String(Result[2]).idx).addEventListener("click", ExecutionGuessNumber).style.visibility = Result[1].Visib;
    document.getElementById(String(Result[2]).idx).addEventListener("click", ExecutionGuessNumber).style.visibility = Result[1].Visib;
    document.getElementById(String(Result[2]).idx).addEventListener("click", ExecutionGuessNumber).value = Result[1].Visib;

//target.addEventListener(onclick, );
*/

function StartGame() {
  document.getElementById("letsgo").style.visibility = "visible";
}

function remainGuess() {
  let remain = document.getElementById("")
}

function resetGame() {
  if (remain == 0) {remain
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

