const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var boy
var ground
var tree,treeImage
var sun
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9
var stone
var chain

function preload()
{
	background1 = loadImage("sprites/background1.jpg")
  treeImg = loadImage("sprites/tree.png")
}

function setup() {
	createCanvas(1280, 606);

//1280
	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

  tree = new Tree(1010,345,50,50)
  
	ground = new Ground()

	boy = new Boy(150,550,200,200)

  stone = new Stone() 

	sun = new Sun()

	  mango1 = new Mango(1015,345)

    mango2 = new Mango(900,280)

    mango3 = new Mango(950,200)
 
    mango4 = new Mango(930,160)

   	mango5 = new Mango(1150,250)
	
    mango6 = new Mango(1050,230)

    mango7 = new Mango(1100,170)

	  mango8 = new Mango(1030,145)

	  mango9 = new Mango(820,285)
 
////    tree = createSprite(1010,345,500,500)
    //tree.addImage("treeImg",treeImg)
   
  //  tree.scale = 0.4
   

  chain = new Chain(stone.body,{x:91,y:488})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(background1);
  
  //textSize(26)
  //text("tanmay", 300,300)

  ground.display();
  boy.display();
  sun.display();
  tree.display()
  stone.display()

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()

  chain.display()

  drawSprites();

  detectCollision(stone, mango1)
  detectCollision(stone, mango2)
  detectCollision(stone, mango3)
  detectCollision(stone, mango4)
  detectCollision(stone, mango5)
  detectCollision(stone, mango6)
  detectCollision(stone, mango7)
  detectCollision(stone, mango8)
  detectCollision(stone, mango9)
  
}

function mouseDragged(){

Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})

}

function mouseReleased(){

chain.fly()

}

function detectCollision(stone,mango){
var mangoBodyPosition=mango.body.position
var stoneBodyPosition=stone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.r+stone.r)
{
Matter.Body.setStatic(mango.body,false);
}
}

function keyPressed(){

if(keyCode === 32){

Matter.body.setPosition(stone.body,{x:91 ,y:488})
chain.attach(stone)

}
}