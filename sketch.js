var m1,f1;

function setup() {
  createCanvas(800,400);
  m1=createSprite(400, 200, 50, 50);
  f1=createSprite(200,200,20,80);
  m1.shapeColor="purple"
  f1.shapeColor="blue"
  m1.debug=true;
f1.debug=true;
}

function draw() {
  background(255,255,255);  
  m1.x=mouseX;
  m1.y=mouseY;
  if(m1.x-f1.x<m1.width/2+f1.width/2
    && f1.x-m1.x<f1.width/2+m1.width/2
    && m1.y-f1.y<m1.height/2+f1.height/2
    && f1.y-m1.y<f1.height/2+m1.height/2){
      m1.shapeColor="black"
  f1.shapeColor="orange"
    }
else {
  m1.shapeColor="purple"
  f1.shapeColor="blue"
}
  drawSprites();
}