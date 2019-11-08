// ROCK PAPER SCISSORS

// Global Vars (you may add more global vars, but you don't need to)
let count = 3;
let pPick = '';
let cPick = '';


// Event Listeners 
// All necessary listeners added for you. Note that the first three have arguments that are used in the event function's parameter variable.
// DO NOT ALTER THIS SECTION
document.getElementById('rock').addEventListener('click', () => pick('rock'));
document.getElementById('paper').addEventListener('click', () => pick('paper'));
document.getElementById('scissors').addEventListener('click', () => pick('scissors'));
document.getElementById('name-btn').addEventListener('click', setNames);

// Event Functions

// When the appropriate picture is selected, pPick and cPick
// are set, then a countdown timer begins.
// DO NOT ALTER THIS FUNCTION
function pick(playerClicked){
    pPick = playerClicked;
    cPick = computerChooses();
    countdown();
}

// Allows a 3, 2, 1 countdown before displaying the results of the round.
// DO NOT ALTER THIS SECTION
function countdown() {
    document.getElementById('countdown-area').style.visibility = "visible";
    if (count > 0) {
        document.getElementById('countdown-area').innerHTML = count
        count--;
        setTimeout(countdown, 700);
    }
    else {
        count = 3;
        document.getElementById('countdown-area').style.visibility = "hidden";
        showPicks(pPick, cPick);
        updateScoreArea(getWinner());
    }
}
/*---------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------*/

// Helper Functions

// Prompt the user for player and computer names, then display them in the appropriate area
// Parameters: none
// Return value: none
// Appx lines of code: 4
function setNames(playerName,computerName){
    playerName = prompt("Please enter your name");
    document.getElementById('p-name').innerHTML = playerName;
    computerName = prompt("Please enter a name for your computer"); 
    document.getElementById('c-name').innerHTML = computerName;
}

// Read the players name from the appropriate section in the HTML ()
// Parameters: none
// Return value: the player's name
// Appx lines of code: 1
function getPlayerName(){
    //document.getElementById('p-name').innerHTML =
    return playerName;
}

// Read the computer's name from the appropriate section in the HTML
// Parameters: none
// Return value: the computer's name
// Appx lines of code: 1
function getCompName(){
    //document.getElementById('c-name').innerHTML =
    return computerName;
}



// Simulate the computer randomly choosing between rock, paper or scissors at 0.33 chance for each.
// Parameters: none
// Return value: A string - 'rock' , 'paper', or 'scissors'
// Appx lines of code: 8
function computerChooses(){

   if (Math.random() < 0.33) {
       return "rock";
   }
   else if (Math.random() < 0.66) {
       return "paper";
   }
   else if (Math.random() < 0.99){
       return "scissors";
   }
   else {
       return "nothing";
   }
}

// Compare player pick and computer pick to see who wins
// Parameters: none
// Return value: The name of the player who won, or the string 'tie'
// Appx lines of code: 10
function getWinner(){

    switch(playerClicked) {
        case "rock,scissors":
        case "scissors,paper":
        case "paper,rock":
        win(playerClicked);
        break;

        case "scissors,rock":
        case "rock,paper":
        case "paper,scissors":
        lose(playerClicked);
        break;

        case "rock,rock":
        case "scissors,scissors":
        case "paper,paper":
        tie(playerClicked);
        break;

    }
    
}

// Show the updated player/computer score in the table and display in text who won in the 'winner-text' area of the HTML
// Parameters: The name of the winner (you must use this parameter in your code, and not a global variable)
// Return value: none
// Appx lines of code: 12
function updateScoreArea(){
    //Add win function
    //When player won, score of player will increase one and it will display it on the website
    win(playerClicked);
    let userScore = 0;
    let computerScore = 0;
    document.getElementById('p-score').innerHTML += userScore;
    document.getElementById('c-score').innerHTML = computerScore;
    document.getElementById('winner-text').innerHTML = playerName + "beats" + computerName;

    //Add lose function
    //When player lost, score of computer will increase one and it will display in the website
    lose(playerClicked);
    document.getElementById('p-score').innerHTML = userScore;
    document.getElementById('c-score').innerHTML += computerScore;
    document.getElementById('winner-text').innerHTML = computerName + "beats" + playerName;

    //Add tie function
    //When there is a tie, both score from player and computer remain
    tie(playerClicked);
    document.getElementById('p-score').innerHTML = userScore;
    document.getElementById('c-score').innerHTML = computerScore;
    document.getElementById('winner-text').innerHTML = computerName + "have the same choice" + playerName;


}

// Update the display area to show what the player/computer chose for this round
// Parameters: none
// Return value: none
// Appx lines of code: 2
function showPicks(){
    document.getElementById('p-move').src = 'images/' + pPick + '.png';
    document.getElementById('c-move').src = 'images/' + cPick + '.png';  
}

// Creativity Function. Add your own unique aspect to this project by coding
// your own function(s). Your function must have either parameters or return values
// or both. Change the name of the function to indicate what it will do.
function myCreativeFunction(){

}