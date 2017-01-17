console.log("JS file is connected to HTML! Woo!")
var cardOne="queen";
var cardTwo="king";
var cardThree="queen";
var cardFour="king";

if(cardOne === cardThree && cardTwo===cardFour){
	window.alert("You found a match!");
}
else{
	window.alert("Sorry, try again.");
}