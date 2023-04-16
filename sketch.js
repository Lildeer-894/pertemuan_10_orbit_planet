let angle = 0;
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight (4);
  noFill();
  translate (300,300);
  let r = 200;
  circle (0,0,r*2);//radius ouyer circle
  
  strokeWeight(32);
  stroke (100,23, 50);
  random(02,5);
  
  let x = r * cos(angle);  //moves the red ball
  let y = r * sin(angle);// moves the red ball
  point(x,y);
  angle += 0.1;  // speed of the red ball
  
}