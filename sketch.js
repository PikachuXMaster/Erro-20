//colocando o namespacing
//const = var mas não pode alterar o valor

//Engine cria o motor da física
const Engine = Matter.Engine;
//World cria o mundo físico
const World = Matter.World;
//Bodies cria objetos físicos
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
//criar uma bola e um solo
var ball;
var ground;
var wedge;
var angle=60;
var poly;


function setup() {
  //criar a tela
  createCanvas (450,850)
  //criar a Engine
  engine = Engine.create();  
  //colocar a física no mundo
  world = engine.world;

  //criar as opções da bola, ela é pesada, tem atrito com o ar?
  var balloptions = {
    restitution: 0.9,
    frictionAir: 0.01, 
  }
  
  ball = Bodies.circle(225,425,10,balloptions);
  World.add(world,ball);

  //criar as opções da rocha



  //criar as opções do solo


  
  //criar o solo, a parede, a bola, a rocha e coloca-los no mundo



  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 //colocar um fundo
 background("blue");
 //atualizar a engine
 Engine.update(engine);
 //adicionar uma circunferencia, um retangulo duas vezes nesta mesma ordem.
 ellipse(ball.position.x, ball.position.y,10);
  
}

