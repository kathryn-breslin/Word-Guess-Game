var bikeWords = [ //array from which the random bike word will be chosen
    "handles",
    "spokes",
    "tires",
    "brakes",
    "pedals",
    "frame"
];


const totalNumberOfGuesses = 10; //a 'const' is a block-scope, the value cannot change or be redeclared


var lettersGuessed = []; //array to hold the guessed letters
var currentWord;
var bikeWord = []; //The random bike word to be guessed; is an array to be filled with correct letters
var remainingGuesses = 0;
var gameHasBegun = false;
var gameHasEnded = false;
var wins = 0;

//Global variables above// 

function beginGame() {
    remainingGuesses = totalNumberOfGuesses;
    gameHasBegun = false;
    currentWord = Math.floor(Math.random() * (bikeWords.length));

    lettersGuessed = []; //both arrays to be used during the game
    bikeWord = []; 

    for (var i = 0; i < bikeWords[currentWord].length; i++) {
    bikeWord.push("_ "); //for each individual letter the underscore will push to the html, depending on the random word that was chosen
    }

};

//pushes to html with updated content
function updateDisplay() {

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("currentWord").innerHTML = "";

    for (var i = 0; i < bikeWord.length; i++) {
        document.getElementById("currentWord").innerHTML += bikeWord[i]; //'+=' is the same at x = x + y; has to be there in order for _ _ _ to track appropriately
    }
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed; 

    if(document.getElementById("status") != null){ //added this to combat the null status
        document.getElementById("status").innerHTML;
    }

    if(remainingGuesses <= 0) {
        gameHasEnded = true;
    }

    if(gameHasEnded) {
        alert("Game Over! Want to play again?");
    }
    
    updateDisplay()
};

document.onkeyup = function(event) { //getting the game to begin (again)
    if(gameHasEnded) {
        beginGame(); //to html -- check this
        gameHasEnded = false;
    }
    else {
        if (event.keyCode >= 65 && event.keyCode <= 90) { //only the letters keys will be enabled since their keycode is between 65 & 90
            makeGuess(event.key.toLowerCase()); //will return uppercase letters to lowercase submissions
        }
    }
};

function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if(!gameHasBegun) {
            gameHasBegun = true;
        }
    if (lettersGuessed.indexOf(letter) === -1) {
        lettersGuessed.push(letter);
        evaluateGuess(letter);
        }
    }
    updateDisplay();
    checkWin();
};

function evaluateGuess(letter) {
    var positions = []; //stores the positions of the letters
    
    for (var i = 0; i < bikeWords[currentWord].length; i++) {
        if(bikeWords[currentWord][i] === letter) {
            positions.push(i);
        }
    }
    if (positions.length <= 0) {
        remainingGuesses--;
    }
    else {
        for (var i = 0; i < positions.length; i++) {
            bikeWord[positions[i]] = letter;
        }
    }
};


function checkWin() {
    if(bikeWord.indexOf("_ ") === -1) {
        wins++;
        gameHasEnded = true;
    }
};

//alert the user whether they have won or lost