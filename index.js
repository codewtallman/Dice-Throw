
var randomNum1 = Math.floor(Math.random()*6)+ 1;

var randomDice = "dice"+randomNum1+".png";

var randomImgDice = "images/"+randomDice;

var player1 = document.querySelectorAll("img")[0];

player1.setAttribute("src",randomImgDice);



var randomNum2 = Math.floor(Math.random()*6)+ 1;

var randomDice2 = "dice"+randomNum2+".png";

var randomImgDice2 = "images/"+randomDice2;

var player2 = document.querySelectorAll("img")[1];

player2.setAttribute("src",randomImgDice2);

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS";
}
else if(randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS";
}
else{
    document.querySelector("h1").innerHTML = "DRAW";
}