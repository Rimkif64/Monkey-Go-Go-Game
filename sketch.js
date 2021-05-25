var monkey , ground, monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup, bananaGroup;
var score;
var survivalTime=0;

function preload(){

 //loading animation
 monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png",  "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png",  "sprite_7.png","sprite_8.png")
  
 //loading images
 bananaImage = loadImage("banana.png");
 obstacleImage = loadImage("obstacle.png");
}


function setup() {
 createCanvas(500,300);
 
 //creating the monkey
 monkey = createSprite(70,200,20,20);
 monkey.addAnimation ("running", monkey_running);
 monkey.scale = 0.1; 
  
 //creating the ground
 ground = createSprite(200,250,500,20);
 ground.shapeColor = "green";
 ground.x = ground.width/24;
 console.log(ground.x);
 
 //creating groups
 bananaGroup = new Group();
 obstacleGroup = new Group();
}


function draw() {
 //backgroundcolor
 background("lightblue");

 if(keyDown("space")&& monkey.y >= 100) {
   monkey.velocityY = -12;
 }
 
 //add gravity
 monkey.velocityY = monkey.velocityY + 1.2;
 
 //moving ground
 ground.x = -4;
 if(ground.x < 0){
  ground.x = ground.width/2;
 }
  
 //stop trex from falling down
 monkey.collide(ground);
 
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
 //calling functions
 Banana();
 Obstacles();
 
  
  
 drawSprites();
}

function Banana(){
  
 if(frameCount % 80 === 0){
   banana = createSprite(400,200,20,20);
   banana.y = Math.round(random(100,170));
   banana.addImage(bananaImage);
   banana.scale = 0.05;
   banana.velocityX = -5;
   banana.lifetime = 150;
   
   bananaGroup.add(banana);
  }
  
}

function Obstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(400,230,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.07;
   obstacle.velocityX = -6;
   obstacle.lifetime = 300;
   
   obstacleGroup.add(obstacle);
 }
}