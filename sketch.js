var obstacle1,margin1,margin2,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7
var fury
var tunnel1,tunnel2
var bmusic
var ob21,ob22,ob23,ob24,ob25,ob26,ob27,ob28,ob29,box1,box2,box3,box4,edges,box5,box6
  var Level=1

function preload(){

}
function setup() {
  createCanvas(displayWidth,displayHeight-110);
  edges=createEdgeSprites()
  box1 = createSprite(displayWidth/43,random(displayHeight/14.4,displayHeight/1.05), random(30,100), random(30,100))
 box2 = createSprite(displayWidth,0,  random(30,100),random(30,100))
   box3 = createSprite(random(displayWidth-displayWidth,displayWidth),displayHeight/1.37,  random(30,200),random(30,100))
   box4 = createSprite(random(displayWidth-displayWidth,displayWidth),displayHeight/1.37, random(30,100),random(30,100))
   box5 = createSprite(random(displayWidth-displayWidth,displayWidth),displayHeight/1.37,  random(30,200),random(30,100))
   box6 = createSprite(random(displayWidth-displayWidth,displayWidth),displayHeight/1.37, random(30,100),random(30,100))
  box4.visible=false
  box3.visible=false
  box2.visible=false
  box1.visible=false
  box5.visible=false
  box6.visible=false
  box1.shapeColor="black"
  box2.shapeColor="black"
  box3.shapeColor="black"
  box4.shapeColor="black"
  box5.shapeColor="black"
  box6.shapeColor="black"
  obstacle4=createSprite(displayWidth/2.84,displayHeight/14.4,15,75)
  tunnel1=createSprite(displayWidth/32,displayHeight/2.4,80,40)
  tunnel2=createSprite(displayHeight,displayHeight/2.4,80,40)
  obstacle6=createSprite(displayWidth/1.42,displayHeight/14.4,15,75)
  obstacle5=createSprite(displayWidth/1.706,displayHeight/14.4,15,75)
  obstacle3=createSprite(displayWidth/2.13,displayHeight/14.4,15,75)
  obstacle1=createSprite(displayWidth/8.53,displayHeight/14.4,15,75)
  obstacle2=createSprite(displayWidth/4.266,displayHeight/14.4,15,75)
  obstacle7=createSprite(displayWidth/1.219,displayHeight/14.4,15,75)
  margin1=createSprite(displayWidth/2,0,displayWidth,50)
  margin2=createSprite(displayWidth/2,displayHeight-110,displayWidth,50)
  obstacle1.velocityY=random(10,30)
  obstacle2.velocityY=random(20,30)
  obstacle3.velocityY=random(10,30)
  obstacle4.velocityY=random(10,30)
  obstacle5.velocityY=random(10,30)
  obstacle7.velocityY=random(10,30)
  obstacle6.velocityY=random(10,30)
  fury=createSprite(displayWidth/25.6,displayHeight/2.4,20,20)
  margin1.shapeColor="black"
  margin2.shapeColor="black"
  obstacle1.shapeColor="black"
  obstacle2.shapeColor="black"
  obstacle3.shapeColor="black"
  obstacle4.shapeColor="black"
  obstacle5.shapeColor="black"
  obstacle6.shapeColor="black"
  obstacle7.shapeColor="black"
  fury.shapeColor="black"
  tunnel1.shapeColor="black"
  tunnel2.shapeColor="black"
  ob21=createSprite(random(displayWidth/4.266,displayWidth),displayHeight/36,20,20)
  ob22=createSprite(random(displayWidth/4.266,displayWidth),displayHeight/36,20,20)
  ob23=createSprite(random(displayWidth/4.266,displayWidth),displayHeight/36,20,20)
  ob24=createSprite(random(displayWidth/4.266,displayWidth),displayHeight/36,20,20)
  ob25=createSprite(random(displayWidth/4.266,displayWidth),displayHeight/36,20,20)
  ob26=createSprite(random(displayWidth/4.266,displayWidth),displayHeight/36,20,20)
  ob27=createSprite(random(displayWidth/4.266,displayWidth),displayHeight/36,20,20)
  ob28=createSprite(random(displayWidth/4.266,displayWidth),displayHeight/36,20,20)
  ob29=createSprite(random(displayWidth/4.266,displayWidth),displayHeight/36,20,20)
  ob21.visible=false
  ob22.visible=false
  ob23.visible=false
  ob24.visible=false
  ob25.visible=false
  ob26.visible=false
  ob27.visible=false
  ob28.visible=false
  ob29.visible=false
  ob21.shapeColor="black"
  ob22.shapeColor="black"
  ob23.shapeColor="black"
  ob24.shapeColor="black"
  ob25.shapeColor="black"
  ob26.shapeColor="black"
  ob27.shapeColor="black"
  ob28.shapeColor="black"
  ob29.shapeColor="black"
  box1.rotationSpeed = 30
box2.rotationSpeed = -30
box3.rotationSpeed = 30
box4.rotationSpeed = -30
box5.rotationSpeed = 30
box6.rotationSpeed = -30

box1.velocityX = random(4,10)
box1.velocityY = random(4,10)

box2.velocityX = random(-4,-10)
box2.velocityY = random(4,10)

box3.velocityX = random(4,10)
box3.velocityY = random(-4,-10)

box4.velocityX = random(-4,-10)
box4.velocityY = random(-4,-10)

box5.velocityX = random(4,10)
box5.velocityY = random(-4,-10)

box6.velocityX = random(-4,-10)
box6.velocityY = random(-4,-10)

}

function draw() {
  background(255,255,255);  
  stroke(0,90)
  stroke("black")
  text("press control+r if you die",640,360)
  
  
  fury.bounceOff(margin2)
  fury.bounceOff(margin1)
  
  if(keyDown("Left")){
    fury.x=fury.x-3
  }
  if(keyDown("right")){
    fury.x=fury.x+3
  }
  
  if(keyDown("up")){
    fury.y=fury.y-3
  }
  if(keyDown("down")){
    fury.y=fury.y+3
  }
  console.log(Level)
if(Level===1){
 
  strokeWeight(2)
 
 stroke(0,90)
 stroke("black")
  text("level tunnel",5,275)
  text(" next level tunnel",1205,275)
  text("press right", 10,330)
  text("on we go", 1220,330)
obstacle1.bounceOff(margin2)
obstacle1.bounceOff(margin1)
obstacle2.bounceOff(margin2)
obstacle2.bounceOff(margin1)
obstacle3.bounceOff(margin2)
obstacle3.bounceOff(margin1)
obstacle4.bounceOff(margin2)
obstacle4.bounceOff(margin1)
obstacle5.bounceOff(margin2)
obstacle5.bounceOff(margin1)
obstacle6.bounceOff(margin2)
obstacle7.bounceOff(margin1)
obstacle7.bounceOff(margin2)
obstacle6.bounceOff(margin1)

if(fury.isTouching(obstacle1)){
  fury.x=displayWidth/50
  fury.y=displayHeight/2.4
  Level=1
}

if(fury.isTouching(obstacle2)){
  fury.x=50
  fury.y=300
  Level=1
}

if(fury.isTouching(obstacle3)){
  fury.x=displayWidth/50
  fury.y=displayHeight/2.4
  Level=1
}

if(fury.isTouching(obstacle4)){
  fury.x=displayWidth/50
  fury.y=displayHeight/2.4
  Level=1
}
if(fury.isTouching(obstacle5)){
  fury.x=displayWidth/50
  fury.y=displayHeight/2.4
  Level=1
}
if(fury.isTouching(obstacle6)){
  fury.x=displayWidth/50
  fury.y=displayHeight/2.4
  Level=1
}
if(fury.isTouching(obstacle7)){
  fury.x=displayWidth/50
  fury.y=displayHeight/2.4
  Level=1
}
  if(fury.isTouching(tunnel2)&&Level===1){
Level =2
fury.x=displayWidth/50
  fury.y=displayHeight/2.4
  }
}
if(Level===2){
  ob21.frameDelay=100
  ob21.visible=true
  text("level tunnel",5,275)
  text(" next level tunnel",1205,275)
  text("press right", 10,330)
  text("on we go", 1220,330)
  ob21.velocityY=random(5,30)
  if(ob21.y>700){
ob21.x=Math.round(random(10,1200))
ob21.y=random(-100,20)
  }
  ob22.visible=true
  ob22.velocityY=random(5,30)
  if(ob22.y>700){
ob22.x=Math.round(random(300,1200))
ob22.y=random(-100,20)
  }

  ob23.visible=true
  ob23.velocityY=random(5,30)
  if(ob23.y>700){
ob23.x=Math.round(random(80,1200))
ob23.y=random(-100,20)
  }
  ob24.frameDelay=100
  ob24.visible=true
  ob24.velocityY=random(5,30)
  if(ob24.y>700){
ob24.x=Math.round(random(10,1200))
ob24.y=random(-100,20)
  }
  ob25.visible=true
  ob25.velocityY=random(5,30)
  if(ob25.y>700){
ob25.x=Math.round(random(300,1200))
ob25.y=random(-100,20)
  }

  ob26.visible=true
  ob26.velocityY=random(5,30)
  if(ob26.y>700){
ob26.x=Math.round(random(80,1200))
ob26.y=random(-100,20)
  }
  
  ob27.visible=true
  ob27.velocityY=random(5,30)
  if(ob27.y>700){
ob27.x=Math.round(random(80,1200))
ob27.y=random(-100,20)
  }
  ob28.visible=true
  ob28.velocityY=random(5,30)
  if(ob28.y>700){
ob28.x=Math.round(random(80,1200))
ob28.y=random(-100,20)
  }
  ob29.visible=true
  ob29.velocityY=random(5,30)
  if(ob29.y>700){
ob29.x=Math.round(random(80,1200))
ob29.y=random(-100,20)
  }
  /*if(fury.isTouching(ob21)){
    Level=1
    fury.x=50
    fury.y=300
  }
  if(fury.isTouching(ob22)){
    Level=1
    fury.x=50
    fury.y=300
  }
  if(fury.isTouching(ob23)){
    Level=1
    fury.x=50
    fury.y=300
  }
  if(fury.isTouching(ob24)){
    Level=1
    fury.x=50
    fury.y=300
  }
  if(fury.isTouching(ob25)){
    Level=1
    fury.x=50
    fury.y=300
  }
  if(fury.isTouching(ob26)){
    Level=1
    fury.x=50
    fury.y=300
  }
  if(fury.isTouching(ob27)){
    Level=1
    fury.x=50
    fury.y=300
  }
  if(fury.isTouching(ob28)){
    Level=1
    fury.x=50
    fury.y=300
  }
  if(fury.isTouching(ob29)){
    Level=1
    fury.x=50
    fury.y=300
  }*/
  if(Level===2&&fury.isTouching(tunnel2)){
    Level=3
    fury.x=displayWidth/50
    fury.y=displayHeight/2.4
  }
} 
if(Level===3){

  ob21.visible=false
  ob22.visible=false
  ob23.visible=false
  ob24.visible=false
  ob25.visible=false
  ob26.visible=false
  ob27.visible=false
  ob28.visible=false
  ob29.visible=false
box1.visible=true
box2.visible=true
box3.visible=true
box4.visible=true 
box6.visible=true
box5.visible=true 
box1.bounceOff(edges)
box1.bounceOff(edges)
box1.bounceOff(edges)
box1.bounceOff(edges)
box4.bounceOff(edges)
box4.bounceOff(edges)
box4.bounceOff(edges)
box4.bounceOff(edges)
box3.bounceOff(edges)
box3.bounceOff(edges)
box3.bounceOff(edges)
box3.bounceOff(edges)
box2.bounceOff(edges)
box2.bounceOff(edges)
box2.bounceOff(edges)
box2.bounceOff(edges)
box5.bounceOff(edges)
box5.bounceOff(edges)
box5.bounceOff(edges)
box5.bounceOff(edges)
box6.bounceOff(edges)
box6.bounceOff(edges)
box6.bounceOff(edges)
box6.bounceOff(edges)
if(fury.isTouching(box1)){
  fury.x=displayWidth/50
  fury.y=displayHeight/2.4
  Level=1
}

if(fury.isTouching(box2)){
  fury.x=displayWidth/50
  fury.y=displayHeight/2.4
  Level=1
}

if(fury.isTouching(box3)){
  fury.x=displayWidth/50
  fury.y=displayHeight/2.4
  Level=1
}

if(fury.isTouching(box4)){
  fury.x=displayWidth/50
  fury.y=displayHeight/2.4
  Level=1
}
if(fury.isTouching(box5)){
  fury.x=displayWidth/50
  fury.y=displayHeight/2.4
  Level=1
}
if(fury.isTouching(box6)){
  fury.x=displayWidth/50
  fury.y=displayHeight/2.4
  Level=1
}

 
}



drawSprites()
}

