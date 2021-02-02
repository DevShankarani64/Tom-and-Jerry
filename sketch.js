var cat, catAnimation, catCollided, catSitting;
var mouse, mouseAnimation, mouseCollided, mouseTeasing;
var ground, groundImg;

function preload() {
    //load the images here
    catAnimation=loadAnimation ("images/cat2.png", "images/cat3.png");
    catCollided=loadAnimation ("images/cat4.png");
    catSitting=loadImage ("images/cat1.png");

    mouseAnimation=loadAnimation ("images/mouse2.png", "images/mouse3.png");
    catCollided=loadAnimation ("images/cat4.png");
    mouseTeasing=loadImage ("images/mouse1.png");
    mouseCollided=loadAnimation("images/mouse4.png");

    groundImg=loadImage ("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    ground=createSprite (600,200);
    ground.addImage(groundImg);
    ground.scale=0.6

    cat=createSprite (800,350,30,30);
    cat.addImage(catSitting);
    cat.scale=0.1

    mouse=createSprite (350,350,30,30);
    mouse.addImage(mouseTeasing);
    mouse.scale=0.1;
    //create tom and jerry sprites here


}

function draw() {

    background(255);
    text (mouseX + ';' + mouseY,10,45);
    keyPressed();

    if (cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.addAnimation("catCollided", catCollided);
        cat.changeAnimation("catCollided");

        mouse.addAnimation("mouseCollided", mouseCollided);
        mouse.changeAnimation("mouseCollided");

        cat.velocityX=0;
        cat.x=390;
    }

    drawSprites();
}

function keyPressed (){
    if (keyCode === LEFT_ARROW){
        cat.velocityX=-5;
        cat.addAnimation ("catRunning", catAnimation);
        cat.changeAnimation ("catRunning");

        mouse.addAnimation("mouseRunning", mouseAnimation);
        mouse.changeAnimation("mouseRunning");
    }
}
