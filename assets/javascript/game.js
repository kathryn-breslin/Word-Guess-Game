var bikeWords = ["tire", "handles", "spokes", "brakes", "pedals"];

//this will choose a random word
var bikeWord = bikeWords[Math.floor(Math.random() * bikeWords.length)];

//this is the for loop that will walk through the answer
var randomBikeWord = [];
for (var i = 0; i < bikeWord.length; i++) {
    randomBikeWord[i] = "_";
}

var remainingLetters = bikeWord.length;

var wins=0;
var losses=0;
var guesses=10;
//created variables to be used. 

//a while loop allows the action to repeat itsef until the answer is no longer true.
while (remainingLetters > 0) {
document.write(randomBikeWord.join(" "));

var userGuess = document.getElementById("keyPress"); 
document.onkeyup = function(event) {
userGuess.textContent = event.key;
}   

for (var g = 0; g < bikeWord.length; g++) {
    if(bikeWord[g] === userGuess) {
    randomBikeWord[g] = userGuess; 
    remainingLetters--;
    guesses--;
    }
}
}

document.write(randomBikeWord.join(" "));
document.write("Awesome! The bike word was " + bikeWord);

//Begin with press any key to start
//define words that are to be guessed

//on the screen, have a _ _ _ _ _ _ where the word is supposed to be <maybe use index numbers to help with the guessing part -- like when the letter is pressed, on the click, the index is related and then logs?

//log each incorrect key that is pressed with a number that goes down from 10 - 1

//when correct letter is pressed, log that letter in the correct order of the word

//if the amount of attempts run out, alert the player with "You lost! Try again next time."
