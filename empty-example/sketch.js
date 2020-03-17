function setup() {
  createCanvas(1000,1000);
}

function draw() {
  var x =random(width);
  var y = random(height);
  var circleSize = random(10,100);
  if (mouseIsPressed) {
    
    
    fill(random(255),random(255),random(255));
   
    
    
  } else {
    fill(random(255));
  }
  circle(mouseX,mouseY,circleSize);

}