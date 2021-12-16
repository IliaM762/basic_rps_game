
// Declaring some variables and linking them to html
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let scoreboard = document.querySelector("#scoreboard");
let resultCommentary = document.querySelector("#resultCommentary")
let playerScore = 0;
let comScore = 0;
scoreboard.textContent = `Your score: ${playerScore} | Computer Score: ${comScore}`;
resultCommentary.textContent = 'You need to win 5 rounds'





// Storing player choise and running game rounds
rock.addEventListener ('click', ()=> {
    playerSelection = "rock";
    playRPS();
    // comChoise();
    console.log("player picked " + playerSelection, ", com picked " + comSelection);
});
paper.addEventListener ('click' , ()=> {
    playerSelection = "paper";
    playRPS();
    // comChoise();
    console.log("player picked " + playerSelection, ", com picked " + comSelection);
});
scissors.addEventListener ('click' , ()=> {
    playerSelection = "scissors";
    playRPS();
    // comChoise();
    console.log("player picked " + playerSelection, ", com picked " + comSelection);
});

// Teaching machine how to pick honest random answer
function comChoise(){
    let randomNumber = Math.floor(Math.random ()*3)+1;

    if(randomNumber == 1){
        comSelection = "rock";       
    }else if(randomNumber == 2){
        comSelection = "paper";       
    }else{
        comSelection = "scissors";
    }
}

// 1 rps game round
function playRPS(){
    comChoise();
    if((playerSelection === "rock" && comSelection === "rock" ) || 
    (playerSelection === "paper" && comSelection === "paper" ) ||
    (playerSelection === "scissors" && comSelection === "scissors" )){
        resultCommentary.textContent = 'Its a draw'
        console.log ("draw");
    }
    else if ((playerSelection === "rock" && comSelection === "scissors" ) || 
    (playerSelection === "paper" && comSelection === "rock" ) ||
    (playerSelection === "scissors" && comSelection === "paper" )){
        playerScore ++;
        scoreboard.textContent = `Your score: ${playerScore} | Computer Score: ${comScore}`;
        resultCommentary.textContent = 'You won, good one';
        console.log ("player won");
    }
    else if((playerSelection === "rock" && comSelection === "paper" ) || 
    (playerSelection === "paper" && comSelection === "scissors" ) ||
    (playerSelection === "scissors" && comSelection === "rock" )){
        comScore ++;
        scoreboard.textContent = `Your score: ${playerScore} | Computer Score: ${comScore}`;
        resultCommentary.textContent = 'You lost, unlucky'
        console.log ("player lost");
    }
    winnerCheck();
}

// picking a winner
function winnerCheck(){
    if(playerScore === 5) {
        console.log("Game has Ended, Player won")
        alert("You won, reload page to play again")
    }
    else if(comScore === 5){
        console.log("Game has Ended, Com won")
        alert("You lost, reload page to play again")
    }
}


