
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var rock,boy,mango;
var ground,log,platform;
var sling,tree;

var gameState = "onSling";
var score = 0;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    boy = new Boy(920,320,70,70);
    rocks1 = new Rock(810, 350);
	tree1 = new Tree(810,260,300, PI/2);

	mango1 = new Mango(700,240,70,70);
    mano2 = new Mango(920,240,70,70);
    mango3 = new Mango(810, 220);

    mango4 = new Mango(810,160,70,70);
    mango5 = new MAngo(760,120,150,);
	mango6 = new Mango(870,120,150,);
	mango7 = new Mango(200,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



