var fixed,move;
var k1,k2;


function setup() {
  createCanvas(800,800);
  fixed=createSprite(400, 200, 50, 50);
fixed.shapeColor="green";
fixed.velocityX=-5;

  move = createSprite(100,200,50,50);
  move.shapeColor="green";
  move.velocityX=4;

  k1 = createSprite(200,400,50,50);
  k1.velocityY=-5;

  k2 = createSprite(200,100,50,50);
  k2.velocityY=4;
}

function draw() {
  background("blue");  

  // move.x=World.mouseX;
  // move.y=World.mouseY;

  bounceOff(move,fixed);
    

  
  

  console.log(move.x)
 if(isTouching(k1,k2)){
  k1.shapeColor="red";
  k2.shapeColor="red";
 } 

  drawSprites();
}

function isTouching(p1,p2){
  if(p1.x-p2.x<p2.width/2+p1.width/2 &&
    p2.x-p1.x< p2.width/2+p1.width/2 &&
    p2.y-p1.y< p2.height/2+p1.height/2 &&
    p1.y-p2.y< p2.height/2+p1.height/2){
   
   return true;
  }else{

    return false;
    
  }
}

function bounceOff(p1,p2){
 if( p1.y-p2.y< p1.height/2+p2.height/2 &&
  p2.y-p1.y< p1.height/2+p2.height/2)
  {
    p1.velocityY=(-1)*p1.velocityY;
    p2.velocityY=(-1)*p2.velocityY;
    

  }

  if(p2.x-p1.x<p1.width/2+p2.width/2 &&
    p1.x-p2.x< p1.width/2+p2.width/2)
    {
     p1.velocityX=(-1)*p1.velocityX;
     p2.velocityX=(-1)*p2.velocityX;


  }
 
   
}

