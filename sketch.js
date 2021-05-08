var canvas;
var music;
var box1,box2,box3,box4,ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box1=createSprite(0,580,360,30);
    box1.shapeColor="green";
    box2=createSprite(295,580,200,30);
    box2.shapeColor="skyblue";
    box3=createSprite(515,580,200,30);
    box3.shapeColor="yellow";
    box4=createSprite(740,580,220,30);
    box4.shapeColor="magenta";
    ball=createSprite(random(20,270),100,40,40);
    ball.shapeColor="white";
    ball.velocityY=4
    ball.velocityX=4

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    ball.bounceOff(edges);
    if(box1.isTouching(ball)&&ball.bounceOff(box1)){
        ball.shapeColur="green";
    }
    if(box2.isTouching(ball)&&ball.bounceOff(box2)){
        ball.shapeColor="skyblue";
    }
    if(box3.isTouching(ball)&&ball.bounceOff(box3)){
        ball.shapeColor="yellow";
    }
    if(box4.isTouching(ball)&&ball.bounceOff(box4)){
        ball.shapeColor="magenta";
    }

drawSprites();

    //add condition to check if box touching surface and make it box
}