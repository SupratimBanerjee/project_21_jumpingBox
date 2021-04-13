var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var ball;


function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(800,600);
    surface1=createSprite(660,590,150,15);
    surface2=createSprite(490,590,150,15);
    surface3=createSprite(320,590,150,15);
    surface4=createSprite(150,590,150,15);
    ball=createSprite(400,300,25,20);
    surface1.shapeColor="green";
    surface2.shapeColor="violet";
    surface3.shapeColor="orange";
    surface4.shapeColor="blue";
    ball.shapeColor="white";

    ball.velocityX=-2;
    ball.velocityY=4;
    

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
        ball.shapeColor="green";
        music.play();
        
    }
    if(surface2.isTouching(ball) && ball.bounceOff(surface2)){
        ball.shapeColor="violet";
        music.play();
        
    }
    if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
        ball.shapeColor="orange";
        music.play();
        
    }
    if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
        ball.shapeColor="blue";
        music.play();
        
    }

        
         
    
    drawSprites();
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
