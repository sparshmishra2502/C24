const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1,box2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,380,width,10);
    box1 = new Box(910,330,70,70);
    pig1 = new Pig(810,330);
    box2 = new Box(710,330,70,70);
    box3 = new Box(910,230,70,70);
    pig2 = new Pig(810,230);
    box4 = new Box(710,230,70,70);
    log = new Log(810,280,300,PI/2); 
    log2 = new Log(810,190,300,PI/2);
    pig3 = new Pig(810,150);
    log3 = new Log(780,140,120,PI/6);
    log4 = new Log(900,160,120,-PI/7);
    bird = new Bird(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    pig1.display();
    box2.display();
    ground.display();
    log.display();
    box3.display();
    pig2.display();
    box4.display();
    log2.display();
    pig3.display();
    log3.display();
    log4.display();
    bird.display();
    //console.log(mouseX,mouseY);
 

    
}