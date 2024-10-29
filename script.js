const arr = ["rock", "paper", "scissor"];
let numberOfRounds = parseInt(prompt("enter the number of rounds you want", 1))
function computerChoice() {
    let mynumber = Math.floor(Math.random() * 3);
    return arr[mynumber];
}
let computerscore = 0; 
let menScore = 0 ; 
const ulElement = document.querySelector("ul"); 
const liElement = document.querySelectorAll("li") ; 
const body= document.querySelector("h1"); 
let cnt = 0 ;
liElement.forEach ((button)=>{
        button.addEventListener("click", ()=>{
            const idOfElement = button.id ; 
            console.log(idOfElement); 
            let choiceOfComputer = computerChoice(); 
            if (idOfElement === "rock"){
                if (choiceOfComputer === "paper"){
                    computerscore++ ; 
                }
                else if (choiceOfComputer ==="scissor") menScore++ ;
            }
            else if (idOfElement === "paper"){
                if (choiceOfComputer === "scissor"){
                    computerscore++ ; 
                }
                else if (choiceOfComputer ==="rock") menScore++;
            }
            else if (idOfElement === "scissor"){
                if (choiceOfComputer === "rock"){
                    computerscore++ ; 
                }
                else if (choiceOfComputer ==="paper") menScore++ ;
            }

    })
})
const start = document.querySelector(".start");
start.addEventListener (("click"), ()=>{
    const scorecard = document.createElement("div");
    scorecard.setAttribute = ("style","width : 70vw ; heigth : 50px ; background-color : black ; color : white ; text-align: center ; padding : 10px ; ")
    scorecard.textContent =`your score : ${menScore} computer score : ${computerscore}`;
    body.append (scorecard);
})











































