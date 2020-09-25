const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box2;
var box1;
var g1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    g1 = new Ground(200,390,400,10);
    box1 = new Box(200,300,50,50);
    box2 = new Box(100,250,60,60);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    g1.display();
   
}