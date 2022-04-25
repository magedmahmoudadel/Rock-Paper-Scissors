const result = document.querySelector('.result');
const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.computer-score');
let playerScore = 0;
let computerScore = 0;




function computerPlay(){ //Generates a random computer play.
    let randomNumber= Math.floor(((Math.random()*3)+1));
    if(randomNumber===1){
        return 'rock'
    } else if (randomNumber===2){
        return 'paper'  
    } else if (randomNumber===3){
        return 'scissors'
    }
}


function playRound(playerSelection,computerSelection){ // Plays a round and determines the winner.
    
    playerSelection=playerSelection.toLowerCase();
    if (playerSelection===computerSelection){
        result.textContent=("It's a tie!");
        return 0;
    }else if (playerSelection==='rock'&&computerSelection==='paper'){
        result.textContent=('You Lose! Paper beats Rock');
        computerScore++;
        return 0;
        
    }else if (playerSelection==='rock'&&computerSelection==='scissors'){
        result.textContent=('You Win! Rock beats Scissors');
        playerScore++;
        return;
        
    }else if (playerSelection==='paper'&&computerSelection==='rock'){
        result.textContent=('You Win! Paper beats Rock');
        playerScore++;
        return;
        
    }else if (playerSelection==='paper'&&computerSelection==='scissors'){
        result.textContent=('You Lose! Scissors beats Paper');
        computerScore++;
        return;
        
    }else if (playerSelection==='scissors'&&computerSelection==='paper'){
        result.textContent=('You Win! Scissors beats Paper');
        playerScore++;
        return;
        
    }else if (playerSelection==='scissors'&&computerSelection==='rock'){
        result.textContent=('You Lose! Rock beats Scissors');
        computerScore++;
        return;
        
    }
}

function resetGame(){
    playerScore=0;
    pScore.textContent=0;
    computerScore=0;
    cScore.textContent=0;
    result.textContent='Result';
    result.style.color= 'black';
}

function game(){ // Plays the game and determines the overall winner based on score.
  
    const buttons = document.querySelectorAll('.btn');
    const reset = document.querySelector('.reset');
    reset.addEventListener('click', ()=>{resetGame()});
    buttons.forEach(btn=>{
        btn.addEventListener('click', (e)=>{
            const computer = computerPlay();
            

            playRound(e.target.id,computer);
            pScore.textContent=playerScore;
            cScore.textContent=computerScore;

            if (playerScore===5){
                result.textContent= 'You Won the Game!';
                result.style.color='red';
            } else if (computerScore===5){
                result.textContent= 'You Lost! Better Luck Next Time';
                result.style.color='red';               
            }

        })
    }) 

  
}

game();