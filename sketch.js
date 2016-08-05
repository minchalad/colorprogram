var myOrange = 55;
var myYellow = 55;
var myRed = 85;

function setup() {
  createCanvas(800,800)  
  background(95,105,35);
}
function draw () {
noStroke();
  fill(myOrange, myYellow, myRed);
  
  myOrange = myOrange + 0.5;
  if(myOrange > 255) {
myOrange = 0;
}

 myYellow = myYellow - 1;
 if(myYellow <= 0) {
   myYellow=255;
 }
 myRed = myRed +1;
  ellipse(mouseX,mouseY,15,15)
  
}