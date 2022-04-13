function computerPlay(){ //Generates a random computer play.
    let randomNumber= Math.floor(((Math.random()*3)+1));
    if(randomNumber===1){
        return 'rock'
    } else if (randomNumber===2){
        return 'paper'
    } else if (randomNumber===3){
        return 'scissors'
    } else{
        console.log('Invalid number')
    }
}


function playRound(playerSelection,computerSelection){ // Plays a round and determines the winner.
    playerSelection=playerSelection.toLowerCase();
    console.log(playerSelection);
    if (playerSelection===computerSelection){
        console.log("It's a tie!");
        return 0;
    }else if (playerSelection==='rock'&&computerSelection==='paper'){
        console.log('You Lose! Paper beats Rock');
        return 0;
    }else if (playerSelection==='rock'&&computerSelection==='scissors'){
        console.log('You Win! Rock beats Scissors');
        return 1;
    }else if (playerSelection==='paper'&&computerSelection==='rock'){
        console.log('You Win! Paper beats Rock');
        return 1;
    }else if (playerSelection==='paper'&&computerSelection==='scissors'){
        console.log('You Lose! Scissors beats Paper');
        return 0;
    }else if (playerSelection==='scissors'&&computerSelection==='paper'){
        console.log('You Win! Scissors beats Paper');
        return 1;
    }else if (playerSelection==='scissors'&&computerSelection==='rock'){
        console.log('You Lose! Rock beats Scissors');
        return 0;
    }else{
        console.log('Invalid input');
    }
}

function game(){ // Plays the game and determines the overall winner based on score.
    let score = 0;

    for (let i = 0; i<5; i++){
        const computer = computerPlay();
        console.log(computer);
        const rock = document.querySelector('#rock');
        const paper = document.querySelector('#paper');
        const scissors = document.querySelector('#scissors');
        rock.addEventListener('click', (e)=>{playRound(e.target.id,computer)});
        paper.addEventListener('click', (e)=>{playRound(e.target.id,computer)});
        scissors.addEventListener('click', (e)=>{playRound(e.target.id,computer)});
    }
    if(play){
        score+=1;
        console.log(score);
    }else{
        console.log(score);
    }
        
    if (score>=3){
        console.log('You won the game!')
    }else{
        console.log('You lost. Better luck next time!')
    }
    
}

game();