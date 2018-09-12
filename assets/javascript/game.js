var holders = document.getElementById("letterholder");
var guessedLetters = document.getElementById("guessedletters");
var losesCount = document.getElementById("loses");
var guessesLeftCount = document.getElementById("guessesleft");
var winsCount = document.getElementById("wins");
var instructions = document.getElementById("instructions");
var restartBtn = document.getElementById("restart");
var wins = 0;
var loses = 0;
var guessesLeft = 10;
var wordBank = ['awkward', 'croquet', 'crypt', 'dwarves', 'gypsy', 'haiku', 'haphazard', 'hyphen', 'ivory', 'jinx', 'jukebox', 'kayak', 'kiosk', 'klutz', 'memento', 'mystify', 'ostracize', 'oxygen', 'pajama', 'phlegm', 'pixel', 'polka', 'rhythmic', 'rogue', 'sphinx', 'swivel', 'yacht', 'zealous', 'zigzag', 'zombie'];
var correctLetters = [];
var incorrectLetters = [];
var word = wordBank[Math.floor(Math.random() * wordBank.length)];
var wordArr = word.split("");

// start game
function startGame() {
// adding underscore as place holders of the word
    guessesLeft = 10;
    correctLetters = [];
    incorrectLetters = [];
    console.log(word);

    for (i=0; i < word.length; i++) {
        correctLetters.push(" _ ");
        holders.textContent = correctLetters.join(' ');
    }
    instructions.innerHTML = "<h2>" + "Press any key to start!" + "</h2>"; 
    guessedLetters.innerHTML = "<p>" + "Guessed Letters: " + "</p>" + "<p>" + incorrectLetters + "</p>";
    winsCount.innerHTML = "<p>" + "Wins: " + "</p>" + "<p>" + wins + "</p>";
    losesCount.innerHTML = "<p>" + "Loses: " + "</p>" + "<p>" + loses + "</p>";
    guessesLeftCount.innerHTML = "<p>" + "Guesses Left: " + "</p>" + "<p>" + guessesLeft + "</p>";
}
// update wins, loses, guesses left numbers
function winlose() {
    if (guessesLeft === 0) {
        loses++;
        holders.textContent = word;
        losesCount.innerHTML = "<p>" + "Loses: " + "</p>" + "<p>" + loses + "</p>";
        instructions.innerHTML = "<h2>" + "You've lost!" + "</h2>"; 
        }
    else if (correctLetters.indexOf(" _ ") === -1) {
        wins++;
        winsCount.innerHTML = "<p>" + "Wins: " + "</p>" + "<p>" + wins + "</p>";
        instructions.innerHTML = "<h2>" + "You've won!" + "</h2>"; 
        }
    }

// keypress function
document.onkeypress = function(event) {
    var userGuess = event.key;

    if (guessesLeft === 0 || correctLetters.indexOf(" _ ") === -1) {
        e.preventDefault();
        }
    
// replace underscores with the correct letter
    for (i=0; i < wordArr.length; i++) {
        if (userGuess === wordArr[i]) {
            correctLetters[i] = wordArr[i];
            holders.textContent = correctLetters.join('');
        }
    }
// alert when letters are already guessed
    if (word.indexOf(userGuess) === -1) {
        if (incorrectLetters.indexOf(userGuess) > -1) {
            instructions.innerHTML = "<h2>" + "You've already guessed that letter!" + "</h2>";
            return false;
        }
// display guessed incorrect letters & guesses left
        else {
        incorrectLetters.push(userGuess);
        guessesLeft--;
        guessedLetters.innerHTML = "<p>" + "Guessed Letters: " + "</p>" + "<p>" + incorrectLetters + "</p>";
        guessesLeftCount.innerHTML = "<p>" + "Guesses Left: " + "</p>" + "<p>" + guessesLeft + "</p>";
        }
    }
    winlose();
}
// new game button
restartBtn.onclick = function () {
    startGame();
}

// call function
startGame();




