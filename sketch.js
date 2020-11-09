
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload(){
  boyImg = loadImage("boy.png");
  treeImg = loadImage("tree.png");
}

function setup() {
	createCanvas(1300, 530);

	engine = Engine.create();
	world = engine.world;
	ground = new Ground(20,400,20,100);
  stone = new Stone();
  sling = new Sling(stone.body, {x:365, y:350});
  mango1 = new Mango(1000,150,40,PI/2);
  mango2 = new Mango(1100,138,40,PI/2);
  mango3 = new Mango(1055,200,40,PI/2);
  mango4 = new Mango(1130,30,40,PI/2);
  mango5 = new Mango(1190,160,40,PI/2);
  mango6 = new Mango(1045,55,40,PI/2);
	Engine.run(engine);
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}
function mouseReleased(){
  sling.fly();
}

function draw() {
 background("lightblue");

  Engine.update(engine);
  imageMode(CENTER);
  image(boyImg, 400, 400, 120, 220);

  push();
  translate(600, 200);
  image(treeImg, 500, 20, 350, 500);
  pop();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  ground.display();
  stone.display();
  sling.display();

}


function detectollision(stone1,mango){
  mangoBodyPosition= mango.body.position
  stone1BodyPosition= stone1.body.position
  
  var distance=dist(stone1BodyPosition.x, stone1BodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=mango.r+stone1.r){
  	  Matter.Body.setStatic(mango.body,false);
    }

  }
