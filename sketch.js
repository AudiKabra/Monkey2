
function preload() {
  backImage=loadImage("jungle.jpg");
  
player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");


bananaImage = loadImage("banana.png");
obstacle_img = loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
var monkey = createSprite (100,100,30,50);
}
function draw() {
  background(220);
  if(obstaclesGroup.isTouching(player)){
    player.scale=0.2;
  }
  drawSprites();
}