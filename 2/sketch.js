// TODO:
//   load image
//   pixel list
//   channels

let mImg;

function preload() {
  mImg = loadImage("../assets/secret_01.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  image(mImg, 0, 0);

  mImg.loadPixels();
  //mImg.pixels is a ready command

  for(let idx = 0; idx < mImg.pixels.length; idx += 4){ //r,g,d,a,r,g,b,a,r...
    let redVal =  mImg.pixels[idx + 0];
    let greenVal = mImg.pixels[idx + 1];
    let blueVal = mImg.pixels[idx + 2];
    let alphaVal = mImg.pixels[idx + 3];

    mImg.pixels[idx + 1] = 0;
    mImg.pixels[idx + 0] = 0;
  }
 
  // TODO: for loop here
  mImg.updatePixels();

  image(mImg, 0, 0); //location(0,0)
}

function draw() {}
