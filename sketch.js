var canvas;
var music;
var ball, surface1, surface2, surface3, surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,800);
    
    //create 4 different surfaces
    surface1=createSprite(100,400,175,20);
    surface1.shapeColor= "red"
    surface2=createSprite(280,400,175,20);
    surface2.shapeColor= "blue"
    surface3=createSprite(460,400,175,20);
    surface3.shapeColor= "green";
    surface4=createSprite(642,400,175,20);
    surface4.shapeColor= "yellow"
    //create box sprite and give velocity
    box=createSprite(800,200,30,30)
  box.shapeColor= "white"
  box.velocityX= -3
  box.velocityY= 3
}

function draw() {
    background("grey");

    //create edgeSprite
createEdgeSprites();
 ball.bounceOff(edges);
 

    //add condition to check if box touching surface and make it box
 if(surface1.isTouching(box) && box.bounceOff(surface1)){
     ball.shapeColor= "red"
 }

 if(surface2.isTouching(box) && box.bounceOff(surface2)){
    ball.shapeColor= "blue"
}
if(surface3.isTouching(box) && box.bounceOff(surface3)){
    ball.shapeColor= "green"
}
if(surface4.isTouching(box) && box.bounceOff(surface4)){
    ball.shapeColor= "yellow"
}
    drawSprites();
}
