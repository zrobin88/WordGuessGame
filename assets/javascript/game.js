const wordArray = ['metallica', 'megadeth', 'anthrax', 'slayer', 'testament', 'pantera', 'ozzy osbourne', 'black sabbath', 'motorhead', 'accept', 'exodus', 'venom', 'kreator', 'havok', "origin", "unearth", "devildriver", "municipal waste", "skeletonwitch", "power trip", "soulfly", "cannibal corpse"];

let chosenWord = wordArray[Math.floor(Math.random() * wordArray.length)]; 
    console.log(chosenWord); 
let hiddenArray = [];
let placeholder = ""; 
let wins = 0; 
let losses = 0;
let usedLetters = [];
let guessesRemaining = 6;  
let rightLetter = [];
let wrongLetter = []; 
let loseAudio = new Audio("assets/audio/evil.mp3");
 const userGuess = [];

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
    
}
//lose game function
const loseGame = () =>{
    alert("HAHAHAH YOU LOSE! INTO THE PIT YOU GO");
    losses++;
    lossesText.textContent = (losses); 
    loseAudio.play();
    
}

const newGame = () =>{
    location.reload(); 
    guessesRemaining = 6;
}

//guess counter function
let guessCounter = () =>{
    guessesRemaining --;
    guessesRemainingText.textContent = (guessesRemaining);
}




for(let i = 0; i < chosenWord.length; i++){
    hiddenArray.push('_');
}
let underScore = hiddenArray.join('');
docUnderscore.textContent = underScore;

//create on key event that captures user input 

document.onkeyup = function(){
    let userGuess = event.key; 
    console.log (userGuess);
    for(var i =0; i< chosenWord.length; i++){
        if(userGuess === chosenWord[i]){
            hiddenArray[i]= userGuess;
            underScore = hiddenArray.join('');
            docUnderscore.textContent = underScore;
        }
    }
// if user is right     
    if (chosenWord.indexOf(userGuess) > -1){
        rightLetter.push(userGuess);
        
        console.log(rightLetter);
        //if user guesses entire word right 
        
        if(userGuess === usedLetters[i]){
            alert('You have already used this')
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
        guessesRemainingText.textContent = (guessesRemaining);
    }
    if (guessesRemaining <= 0){
        loseGame();
        
    }

}


