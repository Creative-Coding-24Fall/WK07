// TODO: use pixel color to draw circles

let mImg;

function preload() {
  mImg = loadImage("../assets/arara.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  mImg.resize(width, 0);
  
  image(mImg, 0, 0);

  mImg.loadPixels();
  for(let idx = 0; idx < mImg.pixels.length; idx += 4){ //r,g,d,a,r,g,b,a,r...
    let redVal =  mImg.pixels[idx + 0];
    let greenVal = mImg.pixels[idx + 1];
    let blueVal = mImg.pixels[idx + 2];
    let alphaVal = mImg.pixels[idx + 3];

    noStroke();
    fill(redVal, greenVal, blueVal);

    let pixIdx = idx/4;
    let y = int(pixIdx / mImg.width);
    let x = pixIdx % mImg. width;
    
    ellipse( x, y, 20);
  }


  // TODO: for loop
  mImg.updatePixels();

  image(mImg, 0, 0);

}

function draw() {}
