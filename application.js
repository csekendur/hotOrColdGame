
var answer = Math.floor((Math.random()*100));
var isFirstGuess = true;
var previousGuess;
var guess;
/*These variables have global scope*/

function myFunction() {
var previousGuessDif;
var guessDif;
/*Scope of these variables is only within this function*/

console.log("in myFunction");
var userGuess = document.getElementById('input').value;
guess = $.trim(userGuess);

if (isNaN(guess)) {
	//console.log("Please enter a number!");
    $('button').onclick(function(){
        $('#NaN').show();
    })
}


else {

console.log(guess);
console.log(answer);
console.log(isFirstGuess);
console.log(guessDif);
console.log(previousGuessDif);

if (!isFirstGuess) {
	previousGuessDif =(Math.abs(answer - previousGuess));
	guessDif = (Math.abs(answer - guess));	
}

if (guess == previousGuess) {
    //console.log("Oops, same guess. Enter a new one!");
    $('button').onclick(function(){
        $('#sameGuess').show();
    })
    //This check is for a duplicate guess.
    //First in the if/else chain because if it's the same guess as before it doesn't need to run through the rest of the chain.
}   

else if (guess == answer) {
	//console.log("correct, you win!");
    $('button').onclick(function(){
        $('#correctAnswer').show();
        })
} 

else if (!isFirstGuess && (guessDif < previousGuessDif)) {
	//console.log("hotter");
    $('button').onclick(function(){
        $('#hotter').show();
        })
}

else if (!isFirstGuess && (previousGuessDif < guessDif)) {
	//console.log("colder");
    $('button').onclick(function(){
        $('#colder').show();
        })
}

else {
	//console.log("Wrong, try again!");
	/*It's only going to get to this line, if the guess is wrong and it's the first guess*/
    $('button').onclick(function(){
        $('#wrong').show();
        })
}; 

isFirstGuess = false;
previousGuess = guess;
};
};
//need input field, button - needs onlcick attribute that links a function
//insdie that function in javascript need document.getElementbyId('input').value;

