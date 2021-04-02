var Boy_Running;
var Boy;
var Run_Running;
var Run;
var bg, bg_Img;

function preload(){
    Boy_Running = loadAnimation("Boy1.png","Boy2.png","Boy3.png","Boy4.png","Boy5.png","Boy6.png","Boy7.png",
    "Boy8.png","Boy9.png","Boy10.png","Boy11.png","Boy12.png","Boy13.png","Boy14.png","Boy15.png","Boy16.png");

    //Run_Running = loadAnimation("Run1.jpg","Run2.jpg","Run3.jpg","Run4.jpg","Run5.jpg","Run6.jpg",
    //"Run7.jpg","Run8.jpg");

    bg_Img = loadImage("Background.jpg");
}

function setup(){
    createCanvas(displayWidth, displayHeight);
    bg = createSprite(displayWidth/2, displayHeight/2);
    bg.scale = 3;
    bg.addImage("Background",bg_Img);

    Boy = createSprite(400,550,15,15);
    Boy.addAnimation("RunningBoy",Boy_Running);

    //Run = createSprite(600,550,15,15);
    //Run.addAnimation("BoyRunning",Run_Running);
}

function draw(){
    bg.velocityX = -2;
    if(bg.x<displayWidth/2.5){
        bg.x = bg.width/2;
    }
    drawSprites();
}