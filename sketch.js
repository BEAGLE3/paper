
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper,ground,box,box1,box2;

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper= new Paper(20,0,25);
	ground= new Ground(750,650,1500,20);
	box= new Box(1400,595,20,90);
	box1= new Box(1240,595,20,90);
	box2= new Box(1320,630,140,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(73);
  
  paper.display();
  ground.display();
  box.display();
  box1.display();
  box2.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-85});
}

}