let mic;
function setup() {
  createCanvas(1000, 1000);
  mic=new p5.AudioIn();
  mic.start();
}

function draw(){ 
  background(220);
let vol=mic.getLevel();
let h=map(vol,0,1,0,3000);
beginShape();
  vertex (300,600);
  vertex (300,400);
  vertex (300,200);
  vertex (500,200);
  vertex (700+h,300);
  vertex (500,350);
  vertex (700-h,400);
  vertex (500,500);
  vertex (300,1000);
  vertex (100,1000);
  endShape(CLOSE);
  fill(255,145,199)
  ellipse(470,280,40,30)
  
  
  
  
  
  
  
}
