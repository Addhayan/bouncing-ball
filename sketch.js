const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  myengine = Engine.create();
  myworld = myengine.world;

  var ground_option = {
  isStatic : true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_option);
  World.add(myworld,ground);
  var ball_option ={
    restitution : 1.0
  }

  ball = Bodies.circle(200,100,20,ball_option);
  World.add(myworld,ball);

}

function draw() {
  background(0);  
  Engine.update(myengine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}