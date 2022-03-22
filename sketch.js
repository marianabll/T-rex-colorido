
var trex, trex_running;
var ground, groundImg;


function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

  groundImg = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;


  ground = createSprite(300,180,600,20);
  //ground.addImage("solo",groundImg);
}

function draw(){
  background("white")

  if(keyDown("space")){
    trex.velocityY = -10;
  }

  ground.velocityX = -4;

  trex.velocityY =  trex.velocityY + 0.5;

  trex.collide(ground);
  
  drawSprites();
}
