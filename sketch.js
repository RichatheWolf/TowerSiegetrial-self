const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  // ground
  base1 = new ground(400, 350, 700, 50)
  // stand
  stand1 = new stand(395, 240, 60, 20)
  // bottom level of pyramid
  brick1 = new block(330,235,30,40)
  brick2 = new block(360,235,30,40)
  brick3 = new block(390,235,30,40)
  brick4 = new block(420,235,30,40)
  brick5 = new block(450,235,30,40)
  // middle level
  brick6 = new block(360,195,30,40)
  brick7 = new block(390,195,30,40)
  brick8 = new block(420,195,30,40)
  // top block
  brick8 = new block(390,155,30,40)
}

function draw() {
  background(255,255,255);


  base1.display()
  brick1.display()
  brick2.display()

  drawSprites();
}