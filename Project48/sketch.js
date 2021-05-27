
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backgroundImg
var astroidImg;
var spaceship1,spaceship2;
var spaceship1Score,spaceship2Score;
var score=0;
var astroids=[];
var astroid;
var bg="morningbg.png"
function preload()
{
  //morningbgImg = loadImage("morningbg.png");
  getBackgroundImg();
}

function setup() {
	createCanvas(1700,700);

engine = Engine.create();
world = engine.world;
Engine.run(engine);
  

ground = new Ground(600,680,1200,10);
spaceship1 = new SpaceShip(900,550,170,170);
spaceship2 = new SpaceShip(1200,550,170,170);
astroid1 = new Astroids(1100,100,30);
}


function draw() {
  if(backgroundImg)
  background(backgroundImg);
  Engine.update(engine);
  spaceship1.display();
  spaceship2.display();
  astroid1.display();

  /*var maxAstroids=3;

  for(var i=0; i<maxAstroids; i++){
    
    astroids.push(new Astroids(random(1000,1400),random(100,1400)));
 }*/

 //for(var i = 0; i<maxAstroids; i++) 
  //{ astroids[i].showAstroids(); astroids[i].updateY() }

 drawSprites();
 
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=6 && hour<=19){
      bg = "morningbg.png";
  }
  else{
      bg = "nightbg.png";
  }

  backgroundImg = loadImage(bg);
}