var runner, path, wall1, wall2;
var runnerAnime, pathImg;

function preload(){
  //pre-load images
  runnerAnime = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.scale=1.2;
  
  runner = createSprite(310,300);
  runner.addAnimation("running",runnerAnime);
  runner.scale = 0.1;
  
  wall1= createSprite(35,200,25,400);
  wall1.visible= false;
  wall2= createSprite(370,200,25,400)
  wall2.visible= false;
 
}

function draw() {
  background(0);

  runner.x= mouseX;
  runner.collide(wall1);
  runner.collide(wall2);

  path.velocityY = 4;
  
  if(path.y > 400 ){
      path.y = height/2;
  }
  drawSprites();
}var runner, path, wall1, wall2;
var runnerAnime, pathImg;

function preload(){
  //pre-load images
  runnerAnime = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.scale=1.2;
  
  runner = createSprite(310,300);
  runner.addAnimation("running",runnerAnime);
  runner.scale = 0.1;
  
  wall1= createSprite(35,200,25,400);
  wall1.visible= false;
  wall2= createSprite(370,200,25,400)
  wall2.visible= false;
 
}

function draw() {
  background(0);

  runner.x= mouseX;
  runner.collide(wall1);
  runner.collide(wall2);

  path.velocityY = 4;
  
  if(path.y > 400 ){
      path.y = height/2;
  }
  drawSprites();
}