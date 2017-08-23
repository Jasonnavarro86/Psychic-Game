	// the array storing the leters for the game. 
    var appLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
];
// Here I am declaring vars for later use.  
var guessesLeft = 10;
var wins = 0;
var losses = 0;
var guessLog = [];

// This is my random number  generator.
var answers = appLetter[Math.floor(Math.random() * ((appLetter.length - 1) + 1))];
console.log(answers);




function userGuesses() {

    var guess = document.getElementById("soFar").value;
    guessLog.push(guess);
    document.getElementById("guessLog").innerHTML = guessLog + " , ";
    document.getElementById("soFar").value = "";
    guessesLeft--;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;

    if (guess == answers) {
        document.getElementById("soFar").value = "";
        document.getElementById("guessLog").value = "";
        wins++;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("guessLog").innerHTML = "";
        guessesLeft = 10;
        document.getElementById("guessesLeft").innerHTML = "10";
        guessLog = [];
        answers = appLetter[Math.floor(Math.random() * ((appLetter.length - 1) + 1))];
        
    }

    if (guessesLeft == 0) {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guessLog").innerHTML = "";
        guessesLeft = 10;
        document.getElementById("guessesLeft").innerHTML = "10";
        guessLog = [];
        answers = appLetter[Math.floor(Math.random() * ((appLetter.length - 1) + 1))];
        
        // // my rest function 

    }

};