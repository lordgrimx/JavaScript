let scoreBoard = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    draw: 0
    };
    /*
    if(!scoreBoard){
    scoreBoard = {
        win: 0,
        lose: 0,
        draw: 0
        }
    }
    */



updateScoreElement();

let result = '';

let compChoise = '';

let situation = '';

let intervalID;

function updateResulElement(){
    document.querySelector('.js-result').innerHTML = `Game Result: ${result}`;
}

function updateMovesElement(situation){
    document.querySelector('.js-moves').innerHTML = `You
    <img class="img-css" src="${situation}-emoji.png">
    <img class="img-css" src="${compChoise}-emoji.png">
    Computer`;
}

function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Win: ${scoreBoard.win}, Lose: ${scoreBoard.lose}, Draw: ${scoreBoard.draw}`;
}

function resetSC(){
    scoreBoard.win = 0;
    scoreBoard.lose = 0;
    scoreBoard.draw = 0;
    localStorage.removeItem('score');
    updateScoreElement();
}

function pickComputerMove(){
    
    let randomNum = Math.random()*3;
    
    if(randomNum>=2){
        compChoise = 'rock';
    } 
    else if(randomNum>=1){
        compChoise = 'paper';
    }
    else{
        compChoise = 'scissors';
    }
    console.log(compChoise);

    return compChoise;
}

const situationElementPaper = document.querySelector('.paper-btn');

const situationElementScissors = document.querySelector('.scissors-btn');

const situationElementRock = document.querySelector('.rock-btn');

situationElementPaper.addEventListener('click', () => {
    situation = 'paper';
    playGame();
});

situationElementScissors.addEventListener('click', () => {
    situation = 'scissors';
    playGame();
});

situationElementRock.addEventListener('click', () => {
    situation = 'rock';
    playGame();
});


function stopBtn(){
   const buttonSelector = document.querySelector('.auto-play');

   if(buttonSelector.innerText === 'Auto Play'){
        buttonSelector.innerHTML = 'Stop Playing';
        buttonSelector.classList.add('stop-btn-css');
        autoPlay();
   }
   else if(buttonSelector.innerHTML === 'Stop Playing'){
        buttonSelector.innerHTML = 'Auto Play';
        buttonSelector.classList.remove('stop-btn-css');
        clearInterval(intervalID);
   }
}

function autoPlay(){
    intervalID = setInterval(() => {
        const playerMove = pickComputerMove();
        pickComputerMove();
        controlGame(compChoise,playerMove);
        updateMovesElement(playerMove);
        updateResulElement();
    }, 1000);
}

function playGame() {
    if(!situation){
        return;
    }
    pickComputerMove();
    controlGame(compChoise,situation);
    updateMovesElement(situation);
    updateResulElement();
}


function controlGame(compChoise,situation){
    if(situation === 'scissors'){
        if(compChoise === 'rock'){
            result = 'You are Lose.';
            scoreBoard.lose++;
        
        }
        else if(compChoise === 'paper'){
            result = 'You are Win.';
            scoreBoard.win++;
        }
        else if(compChoise === 'scissors'){
            result = 'You are Draw.';
            scoreBoard.draw++;
    }
    
    }

    else if(situation === 'paper'){
        if(compChoise === 'rock'){
            result = 'You are Win.';
            scoreBoard.win++;
        }
        else if(compChoise === 'paper'){
            result = 'You are Draw.';
            scoreBoard.draw++;
        }
        else if(compChoise === 'scissors'){
            result = 'You are Lose.';
            scoreBoard.lose++;
            
        }

    }

    else if(situation === 'rock'){
        if(compChoise === 'rock'){
            result = 'You are Draw.';
            scoreBoard.draw++;
            
            
        }
        else if(compChoise === 'paper'){
            result = 'You are Lose.';
            scoreBoard.lose++;
            
            
        }
        else if(compChoise === 'scissors'){
            result = 'You are Win.';
            scoreBoard.win ++;
            
            
        }
        
    }
    
    localStorage.setItem('score', JSON.stringify(scoreBoard));

    updateScoreElement();

}


    
    
    


