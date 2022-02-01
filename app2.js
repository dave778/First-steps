let userScore =0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');

//const scissors_div = document.getElementById('s');
//const paper_div = document.getElementById('p');
//const rock_div = document.getElementById('r');

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = (Math.floor(Math.random()*3));
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter ==='r'){
		return 'Rock';
	}
    if (letter ==='s'){
		return 'Scissors';
	}
	if (letter ==='p'){
		return "Paper";
	}
}


function win(userChoice,computerChoice){
    console.log('WIN');
	console.log('WIN' + userChoice);
	console.log('WIN' + computerChoice);
    userScore ++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}  you win!`;
	//result_p.innerHTML = userChoice + ' beats ' + computerChoice + ' you win!';
	return;
}

function lose(userChoice,computerChoice){
    console.log('LOST');
	console.log('LOSE: '+ userChoice);
	console.log('LOSE: '+ computerChoice);
    computerScore ++;
    computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord (computerChoice)} beats ${convertToWord(userChoice)} you lose!`;
	return;
}

function draw(userChoice,computerChoice){
    console.log('its a draawwww');
	result_p.innerHTML = "It's a DRAWWWWW";
	return;
}



function game(userChoice){
    const computerChoice = getComputerChoice();
	var user = userChoice;
	var comp = computerChoice;
	console.log('GAME ' + user,comp);
	console.log(user + comp);
    switch (user + comp){
        case 'rs':
			win(user,comp);
            break;
        case 'pr':
			win(user,comp);
            break;
        case 'sp':
            win(user,comp);
            break;			
        case 'rp':
			lose(user,comp);
            break;
        case 'ps':
			lose(user,comp);
            break;
        case 'sr':
			lose(user,comp);
            break;			
        case 'rr':
			draw(user,comp);
            break;
        case 'pp':
			draw(user,comp);
            break;
        case 'ss':
            draw(user,comp);
            break;
		case '':
			break;
		case ' ':
			break;
		default:
			break;
    }
	
    
}

function main2(){

	return;
}

/*
function main(){
	//const element = document.querySelectorAll('[id^="id_"]');
	//const container = document.querySelector("#r,#s,#p");
	//var element = document.getElementById(id);
	

    document.getElementById(clicked_id).addEventListener('click',function(e){
		console.log('main:' + this.id);
        game(this.id);
   })

	document.getElementById('s').addEventListener('click',function(){
        game('s');
    })
	
	document.getElementById('r').addEventListener('click',function(){
        game('r');
    })
	
	document.getElementById('p').addEventListener('click',function(){
        game('p');
    })
	
}
*/
main2(); 