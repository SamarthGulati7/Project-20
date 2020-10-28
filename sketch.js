var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,20,20);
  car.velocityX=speed;
  wall=createSprite(1500,200,20,200);

}

function draw() {
  background(0);  

if(wall.x-car.x<car.width/2+wall.width/2){

car.velocityX=0;

var deformation=0.5*weight*speed*speed/22500
if(deformation<100){

  car.shapeColor="green";
  fill("blue");
  text("The car is Tourus",750,200);
}

if(deformation>100 && deformation<180){

  car.shapeColor="yellow";
  fill("blue");
  text("The car is Cyclap",750,200);
}

if(deformation>180){

  car.shapeColor="red"
  fill("blue");
  text("The car is Zenia",750,200);
}

}

  drawSprites();
}