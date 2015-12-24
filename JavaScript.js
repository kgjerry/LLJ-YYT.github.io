var userChoice = prompt("Hi June, I want to play a game with you. Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 

var compare = function(userChoice, computerChoice){
    if (userChoice===computerChoice){
        return "The result is a tie!";
    }
    
    if (userChoice==="rock"){
        if (computerChoice==="scissors")
            return "rock wins";
        else
            return "paper wins";
    }
    if (userChoice==="paper"){
        if (computerChoice==="rock")
            return "paper wins";
        else
            return "scissors wins";
    }
     if (userChoice==="sissors"){
        if (computerChoice==="rock")
            return "rock wins";
        else
            return "scissors wins";
    }
}

console.log("Computer: " + computerChoice);
