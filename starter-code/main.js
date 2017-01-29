console.log("JS file is connected to HTML! Woo!")
var cards=['queen','king','queen','king'];
var cardsInPlay=[];
var gameBoard=document.getElementById('game-board');
var createBoard=function(){
	for(var i=0; i< cards.length; i++){
		var newCard=document.createElement('div');
	newCard.className='card';
	gameBoard.appendChild(newCard);
	gameBoard.appendChild(newCard);
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);

	};
}
var isTwoCards=function(){
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if(this.getAttribute('data-card')==='king'){
		this.innerHTML= "<img src='/Users/AK/fundamentals/crown-1480134_1920.jpg'>";
	} else {
		this.innerHTML="<img src='/Users/AK/fundamentals/crown-1647397_1280.png'>";
	};
	if(cardsInPlay.length===2){
		isMatch(cardsInPlay);
		cardsInPlay=[];
	};
}
var isMatch=function(){
	if(cardsInPlay[0]===cardsInPlay[1]){
	window.alert("You found a match!");
	location.reload();
}
else{
	window.alert("Sorry, try again.");
	location.reload();
};
}
createBoard();





