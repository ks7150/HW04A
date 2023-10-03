function setup() {
  createCanvas(windowWidth, windowHeight);

  fill(100);
print(millis())
}

let xPos = 0;
let yPos= 0
let xVelocity=100

function draw() {
  background(150,50,10)
let secondsNow=second()
let minutesNow=minute()
let hourNow=hour()
let milliNow=millis()
noStroke()
fill(200,50,20)
//let myDiameter= map(secondsNow,0,600,100,height)
//ellipse(400, 400, secondsNow,myDiameter)
ellipse(400, 400, secondsNow,60)
fill("black")
//let myDiameter2=map(minutesNow,0,100,100,100)
//ellipse(400, 400, minutesNow,myDiameter)
ellipse(400,400,60,minutesNow)
fill("darkred")
//let myDiameter3=map(hourNow,0,200,200,200)
//ellipse(400,400,hourNow,myDiameter)
ellipse(400,400,hourNow,hourNow)
fill("white")
rect(0, 300, milliNow/100, 10)
}
