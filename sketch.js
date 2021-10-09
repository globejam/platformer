const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;

let engine;
let world;
var player
var ground

function preload() {
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine=Engine.create();
  world=engine.world;
player = new Player(200,175,50,50);
ground = new Ground(0,450,width,50);
}

function draw(){
  Engine.update(engine);
  background(80)
player.display();
ground.display();
}

