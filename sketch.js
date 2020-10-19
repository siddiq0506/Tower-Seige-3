const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var score = 0;
var engine, world;
var polygon;

function setup() {
  createCanvas(800,400);
 
  
  engine = Engine.create();
  world = engine.world;
  polygon = Bodies.circle(50,200,20)
  World.add(world,polygon)
  

  ground = new Ground(230,390,1200,20);
ground1 = new Ground(360,243,110,10);

wall1 = new Back(400,200,800,800);

box1 = new box(360,185,15,15);
box2 = new box(360,200,15,15);
box3 = new box(360,215,15,15);
box4 = new box(360,230,15,15);

lbox1 = new box(345,200,15,15);
lbox2 = new box(345,215,15,15);
lbox3 = new box(345,230,15,15);

rbox1 = new box(375,200,15,15);
rbox2 = new box(375,215,15,15);
rbox3 = new box(375,230,15,15);

llbox1 = new box(330,215,15,15);
llbox2 = new box(330,230,15,15);

rrbox1 = new box(390,215,15,15);
rrbox2 = new box(390,230,15,15);

rrrbox1 = new box(405,230,15,15);
lllbox1 = new box(315,230,15,15);

poly1 = new Polygon(200,100,15,15);
slingshot = new SlingShot(this.polygon,{x:100,y:200});


}




function draw() {
  background(255,255,255);  
  drawSprites();
  
  textSize(20);
  fill("black");
  text("SCORE :"+score,700,40);
  
  
  
  ground1.display();


  
  box1.display();
  box2.display();
  box3.display();
  box4.display();

  lbox1.display();
  lbox2.display();
  lbox3.display();

  rbox1.display();
  rbox2.display();
  rbox3.display();

  llbox1.display();
  llbox2.display();

  rrbox1.display();
  rrbox2.display();

  rrrbox1.display();
  lllbox1.display();

  poly1.display();
  ground.display();

  
  

}


function mouseDragged(){
  Matter.Body.setPosition(Polygon.body,{x:mouseX,y:mouseY} )
}

function mouseReleased(){
  SlingShot.fly ()
}

