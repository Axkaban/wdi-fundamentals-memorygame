console.log("JS file is connected to HTML! Woo!")
var cardOneToFour=["queen","king","queen","king"]

/*if(cardOne === cardThree && cardTwo===cardFour){
	window.alert("You found a match!");
}
else{
	window.alert("Sorry, try again.");
}*/
var board=document.querySelector('div');
board.id='game-board';
var createCards=function(){
	var gameBoard=document.getElementById('game-board');
	for (var i=0;i<cardOneToFour.length;i++){
	var newCard=document.createElement('div');
	newCard.className='card';
	gameBoard.appendChild(newCard);
  	};

};
createCards();



