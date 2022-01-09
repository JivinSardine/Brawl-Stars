var shelly, nita, shelly_image, nita_image;
var background_image, background;

var life_shelly, life_nita;



function preload() {
  shelly_image = loadImage("shelly.png");
  nita_image = loadImage("nita.png");

  background_image = loadImage("background.png");

}

function setup( ) {
  createCanvas(400, 400);

  life_shelly = 4000;
  life_nita = 3000;

  //create background
  background = createSprite(0,0,400,400);
  background.addImage(background_image);
  background.scale = 2.5;


  //create brawler
  shelly = createSprite(200,100,50,50);
  shelly.addImage(shelly_image);
  shelly.scale = 0.7;

  //create brawler
  nita = createSprite(200,300,50,50);
  nita.addImage(nita_image);
  nita.scale = 0.4;
}

function draw() {
  //move nita
  if(keyDown("up")){
    nita.y = nita.y - 5;
  }

  if(keyDown("down")){
    nita.y = nita.y + 5;
  }

  if(keyDown("right")){
    nita.x = nita.x + 5;
  }

  if(keyDown("left")){
    nita.x = nita.x - 5;
  }



  //move shelly
  if(keyDown("w")){
    shelly.y = shelly.y - 6;
  }

  if(keyDown("s")){
    shelly.y = shelly.y + 6;
  }

  if(keyDown("d")){
    shelly.x = shelly.x + 6;
  }

  if(keyDown("a")){
    shelly.x = shelly.x - 6;
  }



  //points
  if(nita.isTouching(shelly)){
    life_shelly = life_shelly - 500;
    console.log(life_shelly);
    console.log(life_nita);
    shelly.y = shelly.y - 50;
    nita.y = nita.y + 50;
  }else if(shelly.isTouching(nita)){
    life_nita = life_nita - 500;
    shelly.y = shelly.y - 50;
    nita.y = nita.y + 50;
  }

  if(life_shelly < 1){
    shelly.visible = false;
  }

  if(life_nita < 1){
    nita.visible = false;
  }




  drawSprites();
}
