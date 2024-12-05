let posX, posY, radius, xDir, yDir, speed, colorArray, angle;
let shapeSize, numShapes, angleStep, radiusChange, rotationSpeed;

function setup() {
  createCanvas(500, 500);
  
  posX = width / 2;
  posY = height / 2;
  
  radius = 100;
  shapeSize = 40;
  numShapes = 12;
  angleStep = 360 / numShapes;
  
  xDir = random(-1, 1);
  yDir = random(-1, 1);
  speed = random(1, 5);
  
  colorArray = ['#FF6B6B', '#F28F3B', '#F5E663', '#4ECDC4', '#556270'];
  
  angle = 0;
  radiusChange = 0.5;
  rotationSpeed = random(0.01, 1.00);
}

function draw() 
{  
  drawShapes();
  
  posX += xDir * speed;
  posY += yDir * speed;
  
  if (posX < 0 || posX > width) {
    xDir = -xDir;
  }
  if (posY < 0 || posY > height) {
    yDir = -yDir;
  }
  
  angle += rotationSpeed;
  
  radius += radiusChange;
  if (radius > 150 || radius < 50) {
    radiusChange = -radiusChange;
  }
  
  mySignature();
}

function drawShapes() {
  for (let i = 0; i < numShapes; i++) {
    let currentAngle = angle + i * angleStep;
    
    let x = posX + cos(currentAngle) * radius;
    let y = posY + sin(currentAngle) * radius;
    
    fill(colorArray[i % colorArray.length]);
    noStroke();
    
    if (i % 2 == 0) {
      circle(x, y, shapeSize);
    } else {
      square(x - shapeSize / 2, y - shapeSize / 2, shapeSize);
    }
  }
}

function mySignature() {
  textSize(20);
  fill('white');
  text(' FUYU WANG', width - 150, height - 30);
}