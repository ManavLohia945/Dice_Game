var randomNumber1 = Math.random() * 6; //Math.random gives random number between 0 and 0.99 so if we multiply it with 6 it will give random no between 0 to 0.599.
randomNumber1 = Math.floor(randomNumber1 + 1);//and when we do Math.floor() on that decimal no between 0 to 0.599 we get intger number from range 0 to 5.

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2 + 1);

var randomImg1 = "images/dice" + randomNumber1 + ".png";
var randomImg2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src",randomImg1); //we want to change the img of dice on every refresh so we change the src attribute using setAttribute method of js.
document.querySelector(".img2").setAttribute("src",randomImg2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player1 wins🚩";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player2 wins🚩";
}
else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw";
}
