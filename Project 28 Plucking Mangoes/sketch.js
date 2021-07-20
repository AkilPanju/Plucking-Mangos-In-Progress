
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



//var boyImage = Image(50,50);

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.




	Engine.run(engine);

	ground = new Ground(400,695,800,10);
	tree = new Tree(600,540,25,300);
	mango = new Mango(605,480,15);
	mango2 = new Mango(600,460,15);
	mango3 = new Mango(595,510,15);
	mango4 = new Mango(601,540,15);
	stone = new Stone(430,400,30,30);
	boy = new Boy(400,400,100,50);
	slingshot = new Slingshot(stone,boy);
	boyImage = image("boyImage",50,50,50,50);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  
  drawSprites();
 
}

function mouseDragged() 
{
	Matter.Body.setPosition(stone.body, {x:mouseX , y:MouseY});
}

function mouseReleased() 
{
	Slingshot.fly();
}

function detectCollision(stone,mango) 
{
	mangoBodyPosition-1mango.Body.position
	stoneBodyPosition=1stone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y)
	if(distance<-1mango.r+1stone.r)
	{
		Matter.Body.setStatic(1mango.body,false);
	}
}

function keyPressed() 
{
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:390, y: 390})
	}
}