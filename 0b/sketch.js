// TODO: strings and text
//       iterate letters
//       iterate words


let mString = "Computers and networks are more than mere tools: They are like living things, themselves.";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);


  // textSize(16);

  let mWords = mString.split(" ");
  print(mWords);


  for(let idx = 0; idx < mWords.length; idx++){
    let pos = map(idx, 0, mWords.length, 0, width);
   
    if (mWords == "are"){
      textSize(64);
    } else{
      textSize(36);
    }

    text (mWords[idx],pos,pos);
  }
}


// function draw() {}
// let mString = "Computers and networks are more than mere tools: They are like living things, themselves.";

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(220);

//   for(let idx = 0; idx< mString.length; idx++){
//     let mChar = mString[idx];
//     let x = random(width);
//     let y = random(height);
//     if (mChar == "a"){
//       textSize(64);
//     } else{
//       textSize(36);
//     }
//     text (mChar,x,y);
//   }

// }


// function draw() {}
