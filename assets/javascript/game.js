

// Create variables including an array of bands 
const bandList = ['metallica', 'iron maiden', 'megadeth', 'anthrax', 'slayer', 'testament', 'pantera', 'ozzy osbourne', 'black sabbath', 'motorhead', 'accept', 'exodus', 'venom', 'kreator', 'havok', "origin", "unearth", "devildriver", "municipal waste", "skeletonwitch", "power trip", "soulfly", "cannibal corpse"];


//creat function that picks a random index of array bandlist
let randomNum = [Math.floor(Math.random() * bandList.length)];

let chosenWord = bandList[randomNum];
console.log(chosenWord);
let remainingGuesses = 10;
let wins = 0;
let losses = 0;
let underScores = [];
let incorrectWords = [];
let rightWord = [];
let rightWordString = rightWord.toString();
let wrongWord = [];
let usedLetters = [];
let loseAudio = new Audio("assets/audio/evil.mp3");
let placeHolder = document.getElementById("underscores");

//create a function that resets the game 
let newGame = () => {
  wins = 0;
  losses = 0;
  usedLetters = [];
  rightWord = [];
  wrongWord = [];
  remainingGuesses = 10;
  chosenWord = "";

}

// generate underscores based on word length 

let generateUnderScore = () => {
  for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === " ") {
      underScores.push(' ');
    }
    else {
      underScores.push('_');
    }
    if (underScores[i] === chosenWord[i]) {
      placeHolder.textContent = underScores.join('');
    }
  }
  return underScores;

}
console.log(generateUnderScore());

//display user input in dom underscore section 
let docUnderScore = document.getElementById('underscores').innerHTML = underScores;

//get user guess by capturing keypress

document.addEventListener('keypress', (event) => {

  //get key code
  let keycode = event.keyCode;
  //convert keycode to letter   
  let userInput = String.fromCharCode(keycode);
  console.log(userInput);

  // if user is right 
  if (chosenWord.indexOf(userInput) > -1) {
    //push to right word array
    rightWord.push(userInput)

    //display correct letters 
    document.getElementById('underscores').innerHTML = (rightWord.join(''));


    //check if user wins 

    if (chosenWord === rightWord.join('')) {
      wins++;
      document.getElementById('wins').textContent = (wins);
      alert('YOU WIN!')
      newGame();
    }


    //if user choses wrong letter
  }
  else {
    //push to wrong word array 
    wrongWord.push(userInput);
    console.log(wrongWord);
    //push to letters to used letters array
    usedLetters.push(wrongWord);
    document.getElementById('used-letters').textContent = (wrongWord);


    remainingGuesses--;
    //display to dom 
    document.getElementById('guesses-remaining').textContent = (remainingGuesses);
    //if user runs out of guesses 
    if (remainingGuesses === 0) {
      loseAudio.play();
      alert('YOU LOSE! HAHAHAHAH ')
      losses++;
      document.getElementById('losses').textContent = (losses);
      newGame();
    }

  }

  //make sure right words arent repeated and they appear according to the content of the array








});










































