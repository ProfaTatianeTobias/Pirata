//namespace
//módulos da biblioteca Matter
const Engine = Matter.Engine; //mecanismo de física
const World = Matter.World; //mundo
const Bodies = Matter.Bodies; //corpos
const Constraint = Matter.Constraint; //restrição, ainda não vamos usar neste jogo
var engine, world; //meu mecanismo, meu mundo
var backgroundImg, towerImg; //variáveis das imagens
var ground, tower; //variáveis dos corpos



function preload() 
{
    backgroundImg = loadImage("assets/background.gif");
    towerImg = loadImage("assets/tower.png");

 
}
function setup() {

  canvas = createCanvas(1200, 600); //tela
  engine = Engine.create(); //cria o mecanismo de física
  world = engine.world; //cria o nosso mundo
  
 options=
  {
    isStatic:true,
  }
  
  //criação do corpo do solo
  ground = Bodies.rectangle(0,height-1, width*2,1,options);
  //adição do corpo ao mundo
  World.add(world,ground);

   //criação do corpo da torre
   tower = Bodies.rectangle(160,350,160,310,options);
   //adição do corpo ao mundo
   World.add(world,tower);
 
}

function draw() {

  //background(189);
  image(backgroundImg,0,0,1200,600);

  //atualização do mecanismo de física
  Engine.update(engine);
 
  //desenho do solo
  rect(ground.position.x, ground.position.y,width*2,1);

  //desenho da torre
  push();
  imageMode(CENTER);
  image(towerImg,tower.position.x, tower.position.y,160,310);
  pop();
  
   
}
