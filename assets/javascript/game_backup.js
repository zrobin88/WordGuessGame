// Create variables including an array of bands 

const wordList = [
  "metallica",
  "megadeth",
  "slayer",
  "anthrax",
  "testament",
  "kreator",
  "unearth"
];

let wins = 0;
let losses = 0;
let rightLetter = [];
let wrongLetter = [];
let usedLetters = [];
let loseAudio = new Audio("assets/audio/evil.mp3");
var placeHolder = "";

// grabbing random word from wordList

let random = wordList[Math.floor(Math.random()*wordList.length)];
console.log(random)

document.getElementById("underscores").innerHTML = "";

// grabbing _ space from html and changes in size based on random word

for (let i = 0; i < random.length; i++) {
document.getElementById("underscores").innerHTML += "_";
}

// everytime you push key it registers

document.onkeyup = function(event) {
let userInput = event.key;

for (let i = 0; i < random.length; i++) {

if(random[i].charAt() == userInput) {
// replaces underscore with key inputted if correct
  placeHolder = document.getElementById("underscores").innerHTML;
  placeHolder = placeHolder.replaceAt(i , userInput);
  console.log(placeHolder)
  document.getElementById("underscores").innerHTML = placeHolder;

}

}


  
 

}



























