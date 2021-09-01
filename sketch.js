var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var leaf,leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){

  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(160,340,30,30);
rabbit.addImage(rabbitImg);
rabbit.scale =0.09;
}


function draw() {
  background(gardenImg);
  rabbit.x = World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  

  var select_sprites = Math.round(random(1,2));
  if(frameCount % 80 == 0){
    if(select_sprites == 1){
      
      createApples(); 
    }
  
      else { 
        createLeaves();
      }
  }
   textSize(20);
   text('score',1,200);
   textSize(20);
   text('0',20,230);
   
 // if(rabbit.isTouching(apple)){
  //  score = score+1;
 // }

  drawSprites();
}


function createApples() {
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg);
  apple.scale = 0.1;
  apple.velocityY=5;
  apple.lifetime=150;
}
 function createLeaves(){
   leaf = createSprite(random(50,350),40,10,10)
   leaf.addImage(leafImg);
   leaf.scale = 0.1;
   leaf.velocityY=5;
   leaf.lifetime=150;
 }




