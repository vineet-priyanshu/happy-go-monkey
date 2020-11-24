
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;

var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,600)
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2
  console.log(ground.x)
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
  
  background("white");
  
  stroke("white");
  textSize(20);
  fill("black");
  text("Score: "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival time : "+ survivalTime,100,50);
  
  if(keyDown("space")&&monkey.y>100){
    monkey.velocityY=-9
  }
 
  monkey.velocityY=monkey.velocityY+0.5
  
  if(ground.x<150){
    ground.x=ground.width/2
  }
  monkey.collide(ground)
  
  spawnFood();
  spawnObstacles();
  
  drawSprites()
  

  
}

function spawnFood(){
  if(frameCount%80===0){
    banana=createSprite(400,Math.round(random(120,200)),10,10);
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.scale=0.1;
    banana.lifetime=100;
    
    FoodGroup.add(banana);
  }
} 
  
function spawnObstacles(){
  if(frameCount%300===0){
  obstacle=createSprite(400,315,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX=-4;
  obstacle.scale=0.2;
  obstacle.lifetime=100;
   // obstacle.collide(ground);
}
   
}




