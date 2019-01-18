var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

//load images

var character = new Image();
var background = new Image();
var enemyTop = new Image();
var enemyBottom = new Image();

character.src = "images/pics.png";
background.src = "images/building.jpg";
enemyTop.src = "images/dwight.jpg";
enemyBottom.src = "images/dwight.jpg";

//draw images

function draw(){
    ctx.drawImage(background,0,0);
    
}

draw();