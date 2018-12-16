








const wordList = ['metallica', 'megadeth', 'anthrax', 'slayer', 'testament', 'pantera', 'ozzy osbourne', 'black sabbath', 'motorhead', 'accept', 'exodus', 'venom', 'kreator', 'havok', "origin", "unearth", "devildriver", "municipal waste", "skeletonwitch", "power trip", "soulfly", "cannibal corpse"];

let wins = 0;
let losses = 0;
let remainingGuesses = 10;
let rightLetter = [];
let wrongLetter = [];
let usedLetters = [];
let underScores = []; 
let lettersOfTheWord = [];
let placeholder = [];
let loseAudio = new Audio("assets/audio/evil.mp3");
let placeholderText = document.getElementById("underscores");
// get chosen word from wordList

let chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(chosenWord)


let newGame = () => {
    losses = 0;
    usedLetters = [];
    rightLetter = [];
    wrongWord = [];
    remainingGuesses = 10;
    chosenWord = "";
    document.querySelector('#underscores').innerHTML = chosenWord;
  }


// split the word into an array of letters  and grabbing _ space from html and changes based on random word
let underScoreCount = chosenWord.length; 
for(var i =0; i< underScoreCount; i++){
    placeholder += "_"
    console.log(placeholder);
    placeholderText.textContent = (placeholder);
}
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
// capture user key

document.onkeyup = function (event) {
    let userInput = event.key;

    for (let i = 0; i < chosenWord.length; i++) {

        if (chosenWord[i].charAt() == userInput) {
            // replaces underscore with key inputted if correct
            placeholder.textContent = (userInput);
            placeholder = placeholder.replaceAt(i, userInput);
            console.log(placeholder)
            

        }

    }
            // if user is right 
            if (chosenWord.indexOf(userInput) > -1) {
                //push to right word array
                rightLetter.push(userInput)
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



};

