const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var paper;
var ground;

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(100,530,70);
	box1=new Dustbin(1500,600,250,20);
	box2=new Dustbin(1380,560,20,90);
	box3=new Dustbin(1620,560,20,90);
	ground=new Ground(900,620,1800,15);

	Engine.run(engine);
  
}


function draw() {
  background(0);

 paper.display();
 box1.display();
 box2.display();
 box3.display();
 ground.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.paper,paper.paper.position,{x:1800,y:-800})
		console.log(paper.paper.position.y);
	}
}