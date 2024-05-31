
var randomNumberPlayer1  = Math.floor(Math.random()*6)+1;
var randomNumberPlayer2  = Math.floor(Math.random()*6)+1;

var myListOfImages = ["./images/dice1.png", "./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];

document.querySelectorAll("img")[0].setAttribute("src", myListOfImages[randomNumberPlayer1-1]);
document.querySelectorAll("img")[1].setAttribute("src", myListOfImages[randomNumberPlayer2-1]);

if(randomNumberPlayer1 > randomNumberPlayer2){
    document.querySelector("h1").innerHTML = "Player 1 wins 🎲";
    document.querySelectorAll("p")[0].classList.add("winner");

}else if(randomNumberPlayer2 > randomNumberPlayer1){
    document.querySelector("h1").innerHTML = "Player 2 wins 🎲🎲";
    document.querySelectorAll("p")[1].classList.add("winner");
}else{
    document.querySelector("h1").innerHTML = "Draw 🎲🎲🎲";
}

const refreshBtn = document.getElementById("btnRefresh");

function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);
