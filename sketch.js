var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, redA, redB, redC;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() 
{
	createCanvas(800, 700);
	rectMode(CENTER);

	helicopterSprite=createSprite(0, 200, 10,10);
	helicopterSprite.velocityX = 6;
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	packageSprite=createSprite(0, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	redA = createSprite(400,650,200,20);
	redA.shapeColor="red";
	redB = createSprite(290,610,20,100);
	redB.shapeColor="red";
	redC = createSprite(510,610,20,100);
	redC.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(0, 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	 red1 = Bodies.rectangle(400,640,1200,20, {isStatic:true});
	 World.add(world,red1);

	 red2 = Bodies.rectangle(290,610,20,100);
	 World.add(world,red2);

	 red3 = Bodies.rectangle(510,610,20,100);
	 World.add(world,red3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageBody.position.x = helicopterSprite.x;
  packageSprite.x = helicopterSprite.x;
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  keyPressed();


  if(packageBody.position.y===red1.position.y){
	  Matter.Body.setStatic(packageBody, true);
  }
 drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 
	Matter.Body.setStatic(packageBody, false);

	packageSprite.x =! helicopterSprite.x;
	packageBody.position.x =! helicopterSprite.x;


 }
}



