const Engine= Matter.Engine;// namespacing
const World= Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

function setup() {
  createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;

var ground_options={
  isStatic:true
}

 ground=Bodies.rectangle(200,390,200,20,ground_options)
World.add(world,ground)

var Ball_options={
  restitution:1.5
}
Ball=Bodies.circle(200,100,20,Ball_options)
World.add(world,Ball)

// console.log(object)
// console.log(object.type)
// console.log(object.position.x)
// console.log(object.position.y)
}

function draw() {
  background(0); 
 Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20) 

  ellipseMode(RADIUS)
  ellipse(Ball.position.x,Ball.position.y,20,20)
 
}


// matter.js link:"https://unpkg.com/matter-js@0.14.2/build/matter.min.js"