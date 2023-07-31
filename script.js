


//for counting winning points

let currentPlay=0;
let compuPlay=0;
let nuOfties=0;
let rounds = 0;
//computer player

function computerPlayer() {
    let selections = ["Rock", "Paper", "Scissors"];
    let chooseRes = selections[Math.floor(Math.random() * selections.length)];

    return chooseRes;
}

function playgame(currentplayer, computerplayer) {

    if (currentplayer == computerplayer) {
        nuOfties++;
        return "Result : Its a Tieeee!!";
    }
    else if ((currentplayer == "Rock" && computerplayer == "Scissors") || (currentplayer == "Paper" && computerplayer == "Rock"
    ) || (currentplayer == "Scissors" && computerplayer == "Paper")) {
        currentPlay++;
        return `Result : you win !! ${currentplayer} beats ${computerplayer} `;
    }
    else {
        compuPlay++;
        return `Result : Computer Winss !!  ${computerplayer} beats  ${currentplayer} `;
    }

}



function numberOfRounds(current) {

    let currentplayer = current;
    let computerplayers = computerPlayer();

    let outcome = playgame(currentplayer, computerplayers);
    displayres(outcome);

    rounds++;
    if(rounds==5){
        
        displayfinalres();
        resetgame();
    }


}


function displayres(outcome) {
    let res = document.getElementById("result");
    res.textContent = outcome;
}
function displayfinalres(){
    let res = document.getElementById("result");
    res.textContent=`Final Result : Game Over !! You won ${currentPlay} and computer won ${compuPlay} and there was ${nuOfties} number of ties;`
}

function resetgame(){
    rounds=0;
    currentPlay=0;
    compuPlay=0;
    nuOfties=0;
}


