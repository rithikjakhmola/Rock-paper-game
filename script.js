const arr = ["rock", "paper", "scissor"];
function computerChoice (){
    let mynumber = Math.floor (Math.random()*3);
    return arr[mynumber];
}

function takingInput (){
    let choice = prompt ("Enter the number in between \n 1: rock \n 2: paper \n 3: scissor");
    if (choice > 3 ){
        alert ("Enter the valid number ")
        takingInput ();
    }
    return choice-1; 
}
function peopleChoice (){
    let valuee = takingInput();
    return arr[valuee];
}
let computerScore = 0 ; 
let menScore = 0 ; 
function game (){
    let choiceOfComputer = computerChoice ();
    let choiceOfMen = peopleChoice ();
    if (choiceOfComputer === "rock" ){
        if (choiceOfMen=== "paper"){
            menScore++; 
        }
        else if (choiceOfMen === "scissor"){
            computerScore++;
        }
    }
    else if (choiceOfComputer === "paper" ){
        if (choiceOfMen=== "scissor"){
            menScore++; 
        }
        else if (choiceOfMen === "rock"){
            computerScore++;
        }
    }
    if (choiceOfComputer === "scissor" ){
        if (choiceOfMen=== "rock"){
            menScore++; 
        }
        else if (choiceOfMen === "paper"){
            computerScore++;  
        }
    }
}
function gamebegin (){
    for (let i = 0 ; i < 5 ; i++){
        game (); 
    }

}
alert ("It will be a game of five ") ; 
gamebegin ();
function winner (){
    if (menScore> computerScore){
        alert (`Men has won and the final score is\n Men's score: ${menScore},\n Computer's score :,${computerScore}` );
    }
    else if (menScore< computerScore){
        alert (`Computer has won and the final score is\nMen's score: ${menScore},\n Computer's score :,${computerScore}` );
    }
    else {
        alert (`it is a tie and the final score is\nMen's score: ${menScore},\n Computer's score :,${computerScore}`);
    }
}
winner(); 