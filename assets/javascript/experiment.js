








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
let underScores = []; 
var placeHolder = "";

// get random word from wordList

let random = wordList[Math.floor(Math.random() * wordList.length)];
console.log(random)

document.getElementById("underscores").innerHTML = "";

// grabbing _ space from html and changes in size based on random word

for (let i = 0; i < random.length; i++) {
    document.getElementById("underscores").innerHTML += "_";
    
}

// everytime you push key it registers

document.onkeyup = function (event) {
    let userInput = event.key;

    for (let i = 0; i < random.length; i++) {

        if (random[i].charAt() == userInput) {
            // replaces underscore with key inputted if correct
            placeHolder = document.getElementById("underscores").innerHTML;
            placeHolder = placeHolder.replaceAt(i, userInput);
            console.log(placeHolder)
            document.getElementById("underscores").innerHTML = placeHolder;

        }

    }




            // if user is right 
            if (random.indexOf(userInput) > -1) {
                //push to right word array
                rightLetter.push(userInput)


                if (random === rightLetter.join('')) {
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

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}