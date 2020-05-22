
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,690,1200,20);
	paper = new Paper(200,300,30,30);
	rect1 = new Dustbin(970,670,200,20);
	rect2 = new Dustbin(860,630,20,100);
	rect3 = new Dustbin(1080,630,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  rect1.display();
  rect2.display();
  rect3.display();
  drawSprites();
 
}

function keyPressed(){
if (keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55});
}

}


