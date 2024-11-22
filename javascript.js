const zentrieren = document.querySelector(".buttons");

zentrieren.style["background-color"] = "blue";
zentrieren.style["alignContent"] = "center";


const klickObjekt = document.querySelector(".buttons");

klickObjekt.addEventListener("click", rundeSpielen);

function rundeSpielen(e) {
  console.log("eine runde wird gespielt");  
  //mit e.target.id lässt sich im objekt (e) nach target (entspr button) und seiner id suchen
  //mit getComputerChoice wird die Funktion ausgeführt, die dann als parameter in die funktion playRound einfließt
  playRound(e.target.id, getComputerChoice());

}


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


function playRound(humanChoice, computerChoice) {

  console.log("Mensch: " + humanChoice + " / " + "PC: " + computerChoice);

  if (humanChoice == computerChoice) {

    console.log("Beide haben gleich gewählt.");

  } else if ( humanChoice == "schere" && computerChoice =="papier" ||
              humanChoice == "stein" && computerChoice =="schere" ||
              humanChoice == "papier" && computerChoice =="stein") {

              console.log("Mensch gewinnt");
              humanScore ++;
              scoreMensch.textContent = "Human Score is: " + humanScore;

              }
  
  else {
    console.log("PC gewinnt");
    computerScore ++;
    scoreComputer.textContent = "Computer Score is: " + computerScore;

  }

}

 
const scoreMensch = document.querySelector('#scoreMensch');
const scoreComputer = document.querySelector('#scoreComputer');

scoreMensch.style["font-size"] = "32px";
scoreComputer.style["font-size"] = "32px";

//output.textContent = "";


