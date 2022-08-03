var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1 + 1);

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2 + 1);

var randomImg1 = "images/dice" + randomNumber1 + ".png";
var randomImg2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img1").setAttribute("src",randomImg1);
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
