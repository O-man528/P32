const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
ball1=new Ball(100,50,20);
   ball2=new Ball(150,100,30); 
ball3=new Ball(200,150,40);
ball4=new Ball(250,200,15);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("brown");
    rect(ground.position.x,ground.position.y,400,20);
    fill("blue");
ball1.display();
fill("red"); 
ball2.display(); 
fill("yellow");
ball3.display(); 
fill("green");
ball4.display();
}