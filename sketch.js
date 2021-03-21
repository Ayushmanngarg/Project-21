var canvas;
var music;
var box1,box2,box3,box4;
var ball;
var edges;
function preload(){
    touchSound = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box1 =  createSprite(100,580, 150, 50);
    box1.shapeColor = "red";
    box2 = createSprite(270,580,150,50);
    box2.shapeColor = "green";
    box3 = createSprite(440,580,150,50);
    box3.shapeColor = "blue";
    box4 = createSprite(610,580,150,50);
    box4.shapeColor = "yellow";
    ball = createSprite(random(20,750),100,50,50);
    ball.shapeColor = "white";
    ball.velocityX = 5;
    ball.velocityY = 5;
    edges = createEdgeSprites();
 





}

function draw() {
    background("black");
    ball.bounceOff(edges);
    if(box1.isTouching(ball) && ball.bounceOff(box1)){
      ball.shapeColor = "red";
      touchSound.play();
    }
    if(box2.isTouching(ball) && ball.bounceOff(box2)){
        ball.shapeColor = "green";
        touchSound.play();
      }
      if(box3.isTouching(ball) && ball.bounceOff(box3)){
        ball.shapeColor = "blue";
        touchSound.play();
      }
      if(box4.isTouching(ball)){
        ball.shapeColor = "yellow";
       ball.velocityY = 0;
       ball.velocityX = 0;
      }
    drawSprites();



 
}
