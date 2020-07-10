

var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Composite = Matter.Composite;

var engine;

var Box1;
var Box2;
var ground;

function setup() {
  createCanvas(1900, 1000);

  engine = Engine.create();

  Box1 = Bodies.rectangle(800, 400, 100, 100);
  Box2 = Bodies.rectangle(870, 200, 100, 100);
  ground = Bodies.rectangle(950, 970, 1900, 60, {
    isStatic: true
  });

  World.add(engine.world, [Box1, Box2, ground]);

  Engine.run(engine);
}



// p5 from now




function draw() {


  background(51);

  var vertices = Box1.vertices;
  fill(0);
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape();

  var vertices = Box2.vertices;
  fill(255);
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape();

  var vertices = ground.vertices;
  beginShape();
  fill(127);
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape();
}
