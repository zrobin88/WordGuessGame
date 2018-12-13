

// Create variables including an array of bands 
const bandList = ['metallica', 'iron maiden', 'megadeth', 'judas priest', 'anthrax', 'slayer', 'testament', 'pantera', 'ozzy osbourne', 'black sabbath', 'motorhead', 'accpet', 'exodus', 'cannibal corpse', 'morbid angel','venom', 'suffocation', 'annihilator', 'kreator', 'sodom'];


// Choose random index of array  
let chosenWord = bandList[Math.floor(Math.random() * bandList.length)];
console.log(chosenWord);



let remainingGuesses = 10; 
let wins = 0;
let losses = 0;
let underScores = [];
let guessedWords = []; 
let incorrectWords = []; 
let rightWord = [];
let rightWordString = rightWord.toString();
let wrongWord = [];


// create fucntion that generates underscores based on word length 

let generateUnderScore = () => {
  for (let i = 0; i < chosenWord.length; i++) {
    underScores.push('_');
  }

  return underScores;

}

console.log(generateUnderScore());



//get user guess by capturing keypress

document.addEventListener('keypress', (event) => {

//get key code
  let keycode = event.keyCode;
 //convert keycode to letter   
  let userInput = String.fromCharCode(keycode);
  console.log(userInput);

  // if user is right 
  if (chosenWord.indexOf(userInput) > -1){
  //push to right word array
  rightWord.push(userInput)
  //display correct letters 
  document.getElementById('underscores').textContent = (rightWord);
  
  //make sure right words arent repeated and they appear according to the content of the array
  ;}
 

  
  if (rightWordString === chosenWord){
   
  //add to wins counter 
  wins ++; 
  document.getElementById('winsText').innerHTML = wins; 
  alert('you win');
  
  }

  //push to wrong words array 
  else{
    wrongWord.push(userInput);
    console.log(wrongWord);
  }
  





  
});
//if user guess is wrong 
  

  



//display user input in underscore section 

let docUnderScore = document.getElementById('underscores').innerHTML = underScores; 



//display wins/losses 

winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;







//create a counter for number of guesses left 




































