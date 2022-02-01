let userScore =0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById('s');
const paper_div = document.getElementById('p');

function getComputerChoice(){
    const choices = ['r','p','s']
    const randomNumber = (Math.floor(Math.random()*3));
    return choices[randomNumber];
}

function convertToWord(letter){
    if( letter ==="r") return 'Rock';
    if (letter ==='s') return 'Scissors';
    return "Paper";
}






function win (userChoice,computerChoice){
    console.log('WIN');
    userScore ++;
    userScore_span.innerHTML = userScore
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord (computerChoice)}  you win!`;

}

function lose (){
    console.log('LOST');
    computerScore ++
    computerScore_span.innerHTML = computerScore
}

function draw (){
    console.log('its a draawwww');
}
getComputerChoice();



function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            
            win();
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            
            lose ();
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            
            draw();
            break;

    }
    
}

function main (){

    rock_div.addEventListener('click',function(){
        game('r');

    })

    scissors_div.addEventListener('click',function(){
        game('s');
    })

    paper_div.addEventListener('click',function(){
        game('p');
 
 
    })



}
 main()

