var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var particles, divisions;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  particles = new Particle(390,50,10,10 );


  divisions = new Divisions(10,650,10,300);
  divisions1 = new Divisions(80,650,10,300);
  divisions2 = new Divisions(150,650,10,300);
  divisions3 = new Divisions(220,650,10,300);
  divisions4 = new Divisions(290,650,10,300);
  divisions5 = new Divisions(360,650,10,300);
  divisions6 = new Divisions(430,650,10,300);
  divisions7 = new Divisions(500,650,10,300);
  divisions8 = new Divisions(570,650,10,300);
  divisions9 = new Divisions(640,650,10,300);
  divisions10 = new Divisions(721,650,10,300);
    
  //divisions11 = new Divisions(500,430,1000,10);
  
  



   for (var k = 0; k <=width; k = k + 80) {
    // divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   particles.display();
  
   divisions.display();
   divisions1.display();
   divisions2.display();
   divisions3.display();
   divisions4.display();
   divisions5.display();
   divisions6.display();
   divisions7.display();
   divisions8.display();
   divisions9.display();
   divisions10.display();
 //  divisions11.display();
  
 
     
   //drawSprites();
}

function mousePressed(){
  if(gameState!=="end"){
    particle = new Particle(mouseX, 10, 10, 10);
  }
}