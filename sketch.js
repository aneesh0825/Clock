var h,m,s,hAngle,mAngle,sAngle
function setup() {
  angleMode(DEGREES);
  createCanvas(350,350);
}

function draw() {
  background(255,255,255);  
  translate(150,150);
  rotate(-90);
  h=hour();
  m=minute();
  s=second();

  sAngle=map (s,0,60,0,360);
  mAngle=map (m,0,60,0,360);
  hAngle=map (h%12,0,12,0,360);
  
  push()
  rotate(sAngle);
  stroke("red");
  strokeWeight(5);
  line(0,0,100,0);
  pop();
  push()
  rotate(mAngle);
  stroke("blue");
  strokeWeight(5);
  line(0,0,75,0);
  pop();
  push()
  rotate(hAngle);
  stroke("green");
  strokeWeight(5);
  line(0,0,50,0);
  pop();  
  stroke("white");
  point(0,0);
  strokeWeight(7);
  noFill();
  stroke("yellow");
  arc(0,0,280,280,0,sAngle);
  stroke("purple");
  arc(0,0,260,260,0,mAngle);
  stroke("orange");
  arc(0,0,240,240,0,hAngle);
  
}