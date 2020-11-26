const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird

function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

    box5 = new Box(850, 425, 70, 70)
    box4 = new Box(950, 525, 70, 70);
    box3 = new Box(750, 525, 70, 70);
    box2 = new Box(750, 625, 70, 70);
    box1 = new Box(950, 625, 70, 70);
    ground = new Ground(500, 675, 1000, 20)

    pig1 = new Pig(850, 625)
    pig2 = new Pig(850, 525)
    log1 = new Log(850, 575, 270, PI/2)
    log2 = new Log(850, 475, 270, PI/2)
    log3 = new Log(770, 425, 140, PI/5)
    log4 = new Log(930, 425, 140, -PI/5)
    bird = new Bird(200, 200)
}

function draw(){
    background(0);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}