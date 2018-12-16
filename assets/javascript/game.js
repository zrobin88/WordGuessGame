const wordArray = ['metallica', 'megadeth', 'anthrax', 'slayer', 'testament', 'pantera', 'ozzy osbourne', 'black sabbath', 'motorhead', 'accept', 'exodus', 'venom', 'kreator', 'havok', "origin", "unearth", "devildriver", "municipal waste", "skeletonwitch", "power trip", "soulfly", "cannibal corpse"];

let chosenWord = wordArray[Math.floor(Math.random() * wordArray.length)]; 
    console.log(chosenWord); 

let placeholder = ""; 
let wins = 0; 
let losses = 0;
let usedLetters = [];
let guessesRemaining = 6;  
let rightLetter = [];
let wrongLetter = []; 
let loseAudio = new Audio("assets/audio/evil.mp3");
let underScoreCount = chosenWord.length; 

let docUnderscore = document.getElementById("underscore");
let winsText = document.getElementById("wins");
let lossesText = document.getElementById("losses");
let usedLettersText = document.getElementById("used-letters");
let guessesRemainingText = document.getElementById("guesses-remaining"); 
let userGuessText = document.getElementById("user-guess");

//win game function 
const winGame = ()=> {
    wins++;
    winsText.textContent = (wins);
    alert('YOU WIN!');
    var container = document.getElementById("underscore");
    var content = container.innerHTML;
    container.innerHTML= content; 
}
//lose game function
const loseGame = () =>{
    alert("HAHAHAH YOU LOSE! INTO THE PIT YOU GO");
    losses++;
    lossesText.textContent = (losses); 
    loseAudio.play();
}

const newGame = () =>{
    let reloadWord = location.reload(chosenWord); 
    guessesRemaining = 6;
}

//guess counter function
let guessCounter = () =>{
    guessesRemaining --;
    guessesRemainingText.textContent = (guessesRemaining);
}

//pick chosen word and convert it to underscores 


console.log(chosenWord.length);

for(var i =0; i< underScoreCount; i++){
    placeholder += "_"
    docUnderscore.textContent = (placeholder);
    console.log(placeholder);
    


}

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

//create on key event that captures user input 

document.onkeyup = function(){
    let userGuess = event.key; 
    console.log (userGuess);
    docUnderscore.textContent = (i, userGuess);
// if user is right     
    if (chosenWord.indexOf(userGuess) > -1){
        rightLetter.push(userGuess);
        
        console.log(rightLetter);
        //if user guesses entire word right 
        for(var i = 0; i < chosenWord.length; i++){
            docUnderscore.textContent=(rightLetter);
        }
        if (chosenWord === rightLetter.join('') && guessesRemaining >= 0) {
            winGame(); 
            newGame();
        }
    }
    //if user is wrong
    else{
        wrongLetter.push(userGuess)
        //push to letters to used letters array
        usedLetters.push(wrongLetter);
        document.getElementById('used-letters').textContent = (wrongLetter);


        guessesRemaining--;
        //display to dom 
        document.getElementById('guesses-remaining').textContent = (guessesRemaining);
    }
    if (guessesRemaining <= 0){
        loseGame();
        newGame();
    }

}


