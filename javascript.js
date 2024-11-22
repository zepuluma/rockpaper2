/*
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

// let i = 10;


for (let z = 10; z >= 0; z--) {
const para = document.createElement('p');

      //conditional operator ?
      //deutlich übersichtlicher als viele for-schleifen mit (z == 10) und geschwungenen klammern
      https://javascript.info/ifelse#:~:text=The%20so%2Dcalled%20%E2%80%9Cconditional%E2%80%9D,JavaScript%20which%20has%20that%20many.
    
      z == 10 ? console.log("Countdown 10") : //erster eintrag in der schleife
      z == 0 ? console.log("START!") : // letzter eintrag in schleife
      console.log(z); // alles dazwischen
      



}    

/* 
if (z = 10) {
  para.textContent = "countdown 10";
  break;
}
else if (z=1) {
  para.textContent = "start";
  break;
}
else {
para.textContent = "hallo";
output.appendChild(para);
break;
} */

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];


const all = document.querySelector('.all');
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

all.textContent = 'All: ' + people.toString();
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
for (const person in people) {
  if (people[person] == 'Lola' || people[person] == 'Phil' ) {
    refused.textContent += people[person];
    console.log(person);
  } else {
    admitted.textContent += people[person];    
  }

  


}
// 
// admitted.textContent += ;

