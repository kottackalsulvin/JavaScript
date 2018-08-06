/*
Game Rules
- The game has 2 players.
-In each turn, a player rolls a dice as many as he wishes. Each result get added to his ROUND score
-But, If the player rolls  1 ,  all his ROUND score gets lost. After that, it's the next player's turn.
- The player can choose to  'HOLD' , which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn.
-The First player to reach 100 points on GLOBAL score wins the game.

*/


var scores, roundScore, activePlayer, gamePlaying;

/*

// var x= document.querySelector('#score-0').textContent; // to read data using querySelector
	//console.log(x);

	//document.querySelector('.dice').style.display='none'; // not to display the dice.

//document.querySelector('#current-' + activePlayer).innerHTML= '<em' + dice + '</em>';// if we use html

function btn(){//do something}
btn();
document.querySelector('.btn-roll').addEventListener('click',btn);

				or

document.querySelector('.btn-roll').addEventListener('click',function(){
	//do something
	}); //anonymous fn//

*/

//var dice;

init();




document.querySelector('.btn-roll').addEventListener('click', function()
{
if(gamePlaying){
	//1.Random Number


var dice = Math.floor(Math.random() * 6) + 1;

 //2. Display the result
var diceDOM= document.querySelector('.dice');
diceDOM.style.display='block';
diceDOM.src = 'dice-' + dice + '.png';



//3. Update the round score IF the rolled number was NOT a 1. 
if(dice!=1)
{
	//Add Score
roundScore += dice; //roundScore=roundScore+dice;
document.querySelector('#current-' + activePlayer).textContent = roundScore;
}
else{
	//Next player

	nextPlayer();

	}
}

});

function nextPlayer()
{
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;//ternary operator

			//if(activePlayer==0){
			//	activePlayer=1;}
			//else{
			//	activePlayer=0;}
roundScore = 0;
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//document.querySelector('.player-0-panel').classList.remove('active');
//document.querySelector('.player-1-panel').classList.add('active');
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');
document.querySelector('.dice').style.display = 'none';

}


document.querySelector('.btn-hold').addEventListener('click', function()
	{
		if(gamePlaying){
		//Add CURRENt Score to GLOBAL Score
		scores[activePlayer] += roundScore;

		//Update the UI Interface
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		
		//Check if the player won the game
		if (scores[activePlayer]>= 100) {
			document.querySelector('#name-' + activePlayer).textContent = 'winner!';
			document.querySelector('.dice').style.display = 'none';
		
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer+ '-panel').classList.remove('active');
		gamePlaying = false;
		}
		else{
			// Next Player
			nextPlayer();
		}
		}
	});




document.querySelector('.btn-new').addEventListener('click', init);
function init(){
	scores=[0,0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}



/*//dice = Math.floor(Math.random() * 6) + 1;
 


document.querySelector('#current-' + activePlayer).textContent = dice;


var x = document.querySelector('#score-0').textContent;
console.log(x);

function btn(){

}
btn();*/



