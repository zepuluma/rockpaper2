
console.log("bingli");

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {

    let result = Math.random();

    if (result < 0.33) {
      return "schere";

    } else if (result < 0.66) {
      return "stein";

    } else return "papier";
  
    
}

function getHumanChoice() {

let eingabe = prompt("Eingabe: ")

return eingabe.toLowerCase();

}


 
/* for (let i = 1; i < 10; i++) {

  console.log(getComputerChoice());

} */
/* 
let eingabe = getHumanChoice();

console.log(eingabe);
 



function playRound(humanChoice, computerChoice) {

  console.log("Mensch: " + humanChoice + " / " + "PC: " + computerChoice);

  if (humanChoice == computerChoice) {

    console.log("Beide haben gleich gewählt.");

  } else if ( humanChoice == "schere" && computerChoice =="papier" ||
              humanChoice == "stein" && computerChoice =="schere" ||
              humanChoice == "papier" && computerChoice =="stein") {

              console.log("Mensch gewinnt");
              humanScore ++;

              }
  
  else {
    console.log("PC gewinnt");
    computerScore ++;

  }

}



function playGame() {

  for (let i = 0; i < 5; i++) {

    playRound(getHumanChoice(), getComputerChoice());
console.log("human score: " + humanScore);
console.log("computer score: " + computerScore);


  }

}

playGame();  */
/* 
const output = document.querySelector('.output');
output.textContent = "";
 */

