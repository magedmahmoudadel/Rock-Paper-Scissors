function computerPlay(){
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


function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase();
    if (playerSelection===computerSelection){
        return "It's a tie!"
    }else if (playerSelection==='rock'&&computerSelection==='paper'){
        return 'You Lose! Paper beats Rock';
    }else if (playerSelection==='rock'&&computerSelection==='scissors'){
        return 'You Win! Rock beats Scissors';
    }else if (playerSelection==='paper'&&computerSelection==='rock'){
        return 'You Win! Paper beats Rock';
    }else if (playerSelection==='paper'&&computerSelection==='scissors'){
        return 'You Lose! Scissors beats Paper';
    }else if (playerSelection==='scissors'&&computerSelection==='paper'){
        return 'You Win! Scissors beats Paper';
    }else if (playerSelection==='scissors'&&computerSelection==='rock'){
        return 'You Lose! Rock beats Scissors';
    }
}
