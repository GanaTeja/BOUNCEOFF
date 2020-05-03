var movingRect,fixedRect;




function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 100, 50, 50);
  movingRect=createSprite(400,300,60,80);
fixedRect.velocityY=2
movingRect.velocityY=-2

}

function draw() {
  background(0);  
  drawSprites();
  movingRect.shapeColor="yellow"
  fixedRect.shapeColor="red"
  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2&&

    movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2){
      fixedRect.velocityX=fixedRect.velocityX*-1
      movingRect.velocityX=movingRect.velocityX*-1
    }
    if(movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2&&

      movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2){
        fixedRect.velocityY=fixedRect.velocityY*-1
        movingRect.velocityY=movingRect.velocityY*-1
      }
  }
  

