const arr = ["rock", "paper", "scissor"];

function computerChoice() {
    let mynumber = Math.floor(Math.random() * 3);
    return arr[mynumber];
}
let computerscore = false ; 
let menScore = false ; 
const ulElement = document.querySelector("ul"); 
const liElement = document.querySelectorAll("li") ; 
const body= document.querySelector("h1"); 
liElement.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const idOfElement = button.id ; 
        console.log(idOfElement); 
        let choiceOfComputer = computerChoice(); 
        if (idOfElement === "rock"){
            if (choiceOfComputer === "paper"){
                computerscore = true ; 
            }
            else if (choiceOfComputer ==="scissor") computerscore = false ;
        }
        else if (idOfElement === "paper"){
            if (choiceOfComputer === "scissor"){
                computerscore = true ; 
            }
            else if (choiceOfComputer ==="rock") computerscore = false ;
        }
        else if (idOfElement === "scissor"){
            if (choiceOfComputer === "rock"){
                computerscore = true ; 
            }
            else if (choiceOfComputer ==="paper") computerscore = false ;
        }
        ulElement.remove (); 
        let winner ; 
        if (computerscore) winner = "computer"; 
        else if (menScore) winner = "you" ; 
        else winner = "none"
        const announcementOfWinner = document.createElement("h2"); 
        announcementOfWinner.textContent = `You chose ${idOfElement} and the computer chose ${choiceOfComputer} so ${winner} won the match `;
        announcementOfWinner.setAttribute("style", "color : blue ;background-color : white ; width : 80vw; text-align : center")
        body.append(announcementOfWinner); 
        
    });
})