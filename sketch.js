var dog, happyDog, database, foodS, foodStock,happyDogImg,dogImg

function preload()
{
dogImg=loadImage("dogImg.png");
happyDogImg=loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(50,50,100,300);
  dog.addImage("Normal Dog",dogImg);
  dog.scale=0.15;

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  

  drawSprites();
  background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDogImg);
}
drawSprites();
}
function writeStock(x){
  if(x<=0){
x=0
  }else{
    x=x-1
  }
  database.ref.update(){
    food:x
  }
   
  
}


