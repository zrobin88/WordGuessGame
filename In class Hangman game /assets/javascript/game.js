

// Create variables including an array of bands 
const bandList = ['metallica', 'iron maiden', 'megadeth', 'anthrax', 'slayer', 'testament', 'pantera', 'ozzy osbourne', 'black sabbath', 'motorhead', 'accept', 'exodus', 'venom', 'kreator', 'havok', "origin", "unearth", "devildriver", "municipal waste", "skeletonwitch", "power trip", "soulfly", "cannibal corpse"];


//create a function that picks a random index of array bandlist
let randomNum = [Math.floor(Math.random() * bandList.length)];

let chosenWord = bandList[randomNum];
console.log(chosenWord);
let remainingGuesses = 10;
let wins = 0;
let losses = 0;
let underScores = [];
let lettersOfWord = [];
let rightLetter = [];
let wrongLetter = [];
let usedLetters = [];
let loseAudio = new Audio("assets/audio/evil.mp3");
let placeHolder = document.getElementById("underscores");

//create a function that resets the game 
let newGame = () => {
  
  losses = 0;
  usedLetters = [];
  rightLetter = [];
  wrongWord = [];
  remainingGuesses = 10;
  let newWord = bandList[randomNum];
  document.querySelector('#underscores').innerHTML = "";
}

// generate underscores based on word length 

let generateUnderScore = () => {
  let wordView = ""; 
  //loop through array to get length of word
  for (let i = 0; i < chosenWord.length; i++) {
   underScores.push('_');
   
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
  lettersOfWord = chosenWord.split('');
  // if user is right 
  if (chosenWord.indexOf(userInput) > -1) {
    //push to right word array
    rightLetter.push(userInput)

    //display correct letters 

    document.getElementById('underscores').innerHTML = (rightLetter.join(''));
    
    

    //check if user wins 

    if (chosenWord === rightLetter.join('')) {
      wins++;
      document.getElementById('wins').textContent = (wins);
      alert('YOU WIN!')
      newGame();
    }


    //if user choses wrong letter
  }
  else {
    //push to wrong word array 
    wrongLetter.push(userInput);
    console.log(wrongLetter);
    //push to letters to used letters array
    usedLetters.push(wrongLetter);
    document.getElementById('used-letters').textContent = (wrongLetter);


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










































