var iss, issImg, bg
var spacecraft, spacecraftL, spacecraftR, spacecraftD, spacecraftU
var spacecraftLimg, spacecraftRimg, spacecraftDimg, spacecraftUimg
var hasDocked = false

function preload(){
  issImg = loadImage("iss.png")
  bg = loadImage("spacebg.jpg")
  spacecraftLimg = loadImage("spacecraft3.png")
  spacecraftRimg = loadImage("spacecraft4.png")
  spacecraftDimg = loadImage("spacecraft2.png")
  spacecraftUimg = loadImage("spacecraft1.png")
}

function setup() {
  createCanvas(800,600);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage("issImg", issImg)
  spacecraft = createSprite(400,450,50,50)
  spacecraft.addImage("spacecraftimg", spacecraftUimg)
  spacecraft.scale = 0.4
}

function draw() {
  background(bg); 
  if(! hasDocked){
    if(frameCount % 180 === 0){
    spacecraft.x = Math.round(random(200,600))
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage("spacecraftimg", spacecraftLimg)
      spacecraft.x -= 5
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage("spacecraftimg", spacecraftRimg)
      spacecraft.x += 5
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage("spacecraftimg", spacecraftDimg)
      spacecraft.y += 5
    }
    if(keyDown(UP_ARROW)){
      spacecraft.addImage("spacecraftimg", spacecraftUimg)
      spacecraft.y -= 5
    }
    
  }
  if(spacecraft.y <=280){
       hasDocked = true
       textSize(30);
       fill("white");
       text("Docking Successful!", 280,450)
 
     }
  drawSprites();

}

