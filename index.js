var randval1 = Math.floor(Math.random()*6)+1;
var imagesrc="images/" + "dice" + randval1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",imagesrc);

var randval2 = Math.floor(Math.random()*6)+1;
var imagesrc="images/" + "dice" + randval2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",imagesrc);

if(randval1>randval2)
{
  document.querySelector("h1").innerHTML = "player 1 wins";
}
else if (randval1<randval2) {
  document.querySelector("h1").innerHTML = "player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
