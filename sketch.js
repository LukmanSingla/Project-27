const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var box;
var ball1,ball2,ball3,ball4,ball5;
var string1,string2,string3,string4,string5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var options={
		isStatic:true
	}
    box=Bodies.rectangle(400,200,350,30,options);
	ball1=new Ball(300,450);
	ball2=new Ball(350,450);
	ball3=new Ball(400,450);
	ball4=new Ball(450,450);
	ball5=new Ball(500,450);
	World.add(world,box);
	string1=new String(box,ball1.body,-100);
	string2=new String(box,ball2.body,-50);
	string3=new String(box,ball3.body,0);
	string4=new String(box,ball4.body,50);
	string5=new String(box,ball5.body,100);
	Engine.run(engine); 
  
}

function draw() {
  rectMode(CENTER);
  background(255);
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  fill("black");
  rect(box.position.x,box.position.y,350,30);
  drawSprites();
 if(keyWentDown("up")){
	 Body.applyForce(ball1.body,ball1.body.position,{x:-60,y:0});
 }
 
}



